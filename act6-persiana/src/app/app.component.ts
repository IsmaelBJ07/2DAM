import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { EstadoPersiana } from './components/persiana/persiana.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'act6-persiana';
  titulo = 'CONTROL DE VIVIENDA';
  corrienteVivienda = true;
  corrienteHabitacion = true;
  estadoPersiana: EstadoPersiana = 'CERRADA';

  onConectarDesconectar(_event: Event): void {
    this.corrienteVivienda = !this.corrienteVivienda;
  }

  onConectarDesconectarHabitacion(): void {
    this.corrienteHabitacion = !this.corrienteHabitacion;
  }

  onEstadoPersianaChange(estado: EstadoPersiana): void {
    this.estadoPersiana = estado;
  }
}
