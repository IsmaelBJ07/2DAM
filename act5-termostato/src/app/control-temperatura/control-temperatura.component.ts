import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperatura',
  templateUrl: './control-temperatura.component.html',
  styleUrl: './control-temperatura.component.css',
})
export class ControlTemperaturaComponent {
  // Entradas y salidas
  temperatura = input.required<number>();
  temperatureOutput = output<number>();
  umbral = input.required<number>();
  umbralOutput = output<number>();

  // Propiedades
  tempUpdate = 0;
  mensajeError = '';

  // Eventos
  onClickTemp(): void {
    this.tempUpdate = this.temperatura() + 1;
    this.temperatureOutput.emit(this.tempUpdate);
  }

  onClickDecTemp(): void {
    this.tempUpdate = this.temperatura() - 1;
    this.temperatureOutput.emit(this.tempUpdate);
  }

  onInput(evento: Event): void {
    // Indicamos a TypeScript que target es un campo HTML para poder leer su valor.
    // Esto solo cambia el tipo que comprueba TypeScript; no convierte el elemento.
    const campo = evento.target as HTMLInputElement;
    const texto = campo.value.trim();
    const nuevoUmbral = Number(texto);

    if (texto === '' || !Number.isFinite(nuevoUmbral)) {
      this.mensajeError = 'Introduce un número válido.';
      return;
    }

    this.mensajeError = '';
    this.umbralOutput.emit(nuevoUmbral);
  }
}
