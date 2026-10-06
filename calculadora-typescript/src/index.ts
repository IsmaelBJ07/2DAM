import './style.css';

const aplicacion = document.querySelector<HTMLDivElement>('#aplicacion');
if (!aplicacion) throw new Error('No se encontró el elemento principal de la página.');


aplicacion.innerHTML = '<main class="calculadoras" aria-label="Calculadoras"></main>';
const contenedor = aplicacion.querySelector<HTMLElement>('.calculadoras');
if (!contenedor) throw new Error('No se encontró el contenedor de calculadoras.');




const teclas = [
  ['AC', 'borrar', 'funcion'], ['+/-', 'signo', 'funcion'], ['%', 'porcentaje', 'funcion'], ['÷', '/', 'operacion'],
  ['7', '7', ''], ['8', '8', ''], ['9', '9', ''], ['×', '*', 'operacion'],
  ['4', '4', ''], ['5', '5', ''], ['6', '6', ''], ['−', '-', 'operacion'],
  ['1', '1', ''], ['2', '2', ''], ['3', '3', ''], ['+', '+', 'operacion'],
  ['0', '0', 'cero'], ['.', '.', ''], ['=', 'igual', 'operacion'],
];




class Calculadora {
  private pantalla: HTMLOutputElement;
  private primerNumero = 0;
  private operacion = '';
  private limpiarPantalla = true;



  constructor(contenedor: HTMLElement, numero: number) {
    const elemento = document.createElement('section');
    elemento.className = 'calculadora';
    elemento.setAttribute('aria-label', `Calculadora ${numero}`);
    elemento.innerHTML = `
      <h2>Calculadora ${numero}</h2>
      <output aria-live="polite">0</output>
      <div class="teclas">
        ${teclas.map(([texto, tecla, estilo]) =>
          `<button class="${estilo ? `tecla-${estilo}` : ''}" data-tecla="${tecla}">${texto}</button>`
        ).join('')}
      </div>
    `;
    contenedor.append(elemento);



    const pantalla = elemento.querySelector<HTMLOutputElement>('output');
    if (!pantalla) throw new Error('No se encontró la pantalla de la calculadora.');
    this.pantalla = pantalla;

    elemento.querySelectorAll<HTMLButtonElement>('button').forEach((boton) => {
      boton.addEventListener('click', () => this.pulsar(boton.dataset.tecla));
    });
  }




  

  private pulsar(tecla?: string): void {
    if (!tecla) return;

    if (/^\d$/.test(tecla)) {
      this.pantalla.value = this.limpiarPantalla || this.pantalla.value === '0' || this.pantalla.value === 'Error'
        ? tecla
        : this.pantalla.value + tecla;
      this.limpiarPantalla = false;
      return;
    }

    switch (tecla) {
      case '.':
        if (this.limpiarPantalla || this.pantalla.value === 'Error') {
          this.pantalla.value = '0.';
          this.limpiarPantalla = false;
        } else if (!this.pantalla.value.includes('.')) {
          this.pantalla.value += '.';
        }
        break;
      case 'borrar':
        this.pantalla.value = '0';
        this.primerNumero = 0;
        this.operacion = '';
        this.limpiarPantalla = true;
        break;
      case 'signo':
        if (this.pantalla.value !== 'Error') this.pantalla.value = String(-Number(this.pantalla.value));
        break;
      case 'porcentaje':
        if (this.pantalla.value !== 'Error') this.pantalla.value = String(Number(this.pantalla.value) / 100);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.primerNumero = Number(this.pantalla.value);
        this.operacion = tecla;
        this.limpiarPantalla = true;
        break;
      case 'igual': {
        const segundoNumero = Number(this.pantalla.value);
        const operaciones: Record<string, number> = {
          '+': this.primerNumero + segundoNumero,
          '-': this.primerNumero - segundoNumero,
          '*': this.primerNumero * segundoNumero,
          '/': this.primerNumero / segundoNumero,
        };
        if (this.operacion) {
          this.pantalla.value = this.operacion === '/' && segundoNumero === 0
            ? 'Error'
            : String(operaciones[this.operacion]);
        }
        this.operacion = '';
        this.limpiarPantalla = true;
        break;
      }
    }
  }
}

for (let numero = 1; numero <= 4; numero += 1) {
  new Calculadora(contenedor, numero);
}
