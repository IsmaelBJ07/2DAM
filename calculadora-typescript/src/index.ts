import './style.css';

const aplicacion = document.querySelector<HTMLDivElement>('#aplicacion');

if (!aplicacion) throw new Error('No se encontró el elemento principal de la página.');

aplicacion.innerHTML = `
  <main class="calculadora" aria-label="Calculadora">
    <div class="pantalla" aria-live="polite">
      <output id="pantalla">0</output>
    </div>
    <div class="teclas">
      <button class="tecla-funcion" data-tecla="borrar">AC</button>
      <button class="tecla-funcion" data-tecla="signo">+/-</button>
      <button class="tecla-funcion" data-tecla="porcentaje">%</button>
      <button class="tecla-operacion" data-tecla="/">÷</button>
      <button data-tecla="7">7</button>
      <button data-tecla="8">8</button>
      <button data-tecla="9">9</button>
      <button class="tecla-operacion" data-tecla="*">×</button>
      <button data-tecla="4">4</button>
      <button data-tecla="5">5</button>
      <button data-tecla="6">6</button>
      <button class="tecla-operacion" data-tecla="-">−</button>
      <button data-tecla="1">1</button>
      <button data-tecla="2">2</button>
      <button data-tecla="3">3</button>
      <button class="tecla-operacion" data-tecla="+">+</button>
      <button class="tecla-cero" data-tecla="0">0</button>
      <button data-tecla=".">.</button>
      <button class="tecla-operacion tecla-igual" data-tecla="igual">=</button>
    </div>
  </main>
`;

const pantalla = document.querySelector<HTMLOutputElement>('#pantalla');
if (!pantalla) throw new Error('No se encontró la pantalla.');

let primerNumero = 0;
let operacion = '';
let limpiarPantalla = true;

const botones = document.querySelectorAll<HTMLButtonElement>('.teclas button');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const tecla = boton.getAttribute('data-tecla');
    if (!tecla) return;

    if (tecla >= '0' && tecla <= '9') {
      if (limpiarPantalla || pantalla.value === '0' || pantalla.value === 'Error') {
        pantalla.value = tecla;
      } else {
        pantalla.value = pantalla.value + tecla;
      }
      limpiarPantalla = false;
    } else if (tecla === '.') {
      if (limpiarPantalla || pantalla.value === 'Error') {
        pantalla.value = '0.';
        limpiarPantalla = false;
      } else if (!pantalla.value.includes('.')) {
        pantalla.value = pantalla.value + '.';
      }
    } else if (tecla === 'borrar') {
      pantalla.value = '0';
      primerNumero = 0;
      operacion = '';
      limpiarPantalla = true;
    } else if (tecla === 'signo' && pantalla.value !== 'Error') {
      pantalla.value = String(Number(pantalla.value) * -1);
    } else if (tecla === 'porcentaje' && pantalla.value !== 'Error') {
      pantalla.value = String(Number(pantalla.value) / 100);
    } else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
      primerNumero = Number(pantalla.value);
      operacion = tecla;
      limpiarPantalla = true;
    } else if (tecla === 'igual') {
      const segundoNumero = Number(pantalla.value);

      if (operacion === '+') pantalla.value = String(primerNumero + segundoNumero);
      if (operacion === '-') pantalla.value = String(primerNumero - segundoNumero);
      if (operacion === '*') pantalla.value = String(primerNumero * segundoNumero);
      if (operacion === '/') {
        if (segundoNumero === 0) {
          pantalla.value = 'Error';
        } else {
          pantalla.value = String(primerNumero / segundoNumero);
        }
      }

      operacion = '';
      limpiarPantalla = true;
    }
  });
});
