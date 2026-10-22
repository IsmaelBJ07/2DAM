import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EstadoPersiana, PersianaComponent } from '../persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  @Input() corriente = false;
  @Output() estadoPersianaChange = new EventEmitter<EstadoPersiana>();

  onEstadoPersianaChange(estado: EstadoPersiana): void {
    this.estadoPersianaChange.emit(estado);
  }

}
