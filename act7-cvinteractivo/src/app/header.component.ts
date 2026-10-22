import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  foto = input.required<string>();
  seccionActiva = input.required<string>();
  seccionSeleccionada = output<string>();
}
