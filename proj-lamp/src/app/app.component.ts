import { Component } from '@angular/core';
import { LamparaComponent } from './lampara/lampara.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  enchufado = false;
  estadoActual = false;

  onClickEnchufar(): void {
    this.enchufado = true;
  }

  onClickDesenchufar(): void {
    this.enchufado = false;
    this.estadoActual = false;
  }

  mostrarEstado(nuevoEstado: boolean): void {
    this.estadoActual = nuevoEstado;
  }
}
