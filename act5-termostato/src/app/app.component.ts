import { Component } from '@angular/core';
import { ControlTemperaturaComponent } from './control-temperatura/control-temperatura.component';
import { DisplayTemperaturaComponent } from './display-temperatura/display-temperatura.component';

@Component({
  selector: 'app-root',
  imports: [ControlTemperaturaComponent, DisplayTemperaturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  temperatura = 20;
  umbral = 25;

  onCambioTemperatura(nuevaTemperatura: number): void {
    this.temperatura = nuevaTemperatura;
  }

  onCambioUmbral(nuevoUmbral: number): void {
    this.umbral = nuevoUmbral;
  }
}
