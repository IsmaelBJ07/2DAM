import { Component, EventEmitter, Input, Output } from '@angular/core';

export type EstadoPersiana = 'ABIERTA' | 'CERRADA';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {
  @Input() corriente = false;
  @Output() estadoChange = new EventEmitter<EstadoPersiana>();

  estado: EstadoPersiana = 'CERRADA';

  cambiarEstado(): void {
    this.estado = this.estado === 'CERRADA' ? 'ABIERTA' : 'CERRADA';
    this.estadoChange.emit(this.estado);
  }
}
