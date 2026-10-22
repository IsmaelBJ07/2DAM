import { Component, input } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ciudad = input.required<string>();
  numero = input.required<string>();
  correo = input.required<string>();
  github = input.required<string>();
  idiomas = input.required<string>();
  mostrarContacto = true;
}
