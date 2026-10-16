import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  standalone: true,
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {
  enchufada = input<boolean>(false);
  encendida = false;
  estadoLampara = output<boolean>();

  constructor() {
    effect(() => {
      if (!this.enchufada()) {
        this.encendida = false;
        this.estadoLampara.emit(false);
      }
    });
  }

  cambiarEstado(): void {
    if (!this.enchufada()) {
      return;
    }

    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida);
  }
}
