import { Component, input } from '@angular/core';
import { AsideComponent } from './aside.component';
import { MainComponent } from './main.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AsideComponent, MainComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  seccion = input.required<string>();
  sobreMi = input.required<string>();
  formacion = input.required<string>();
  ciudad = input.required<string>();
  numero = input.required<string>();
  correo = input.required<string>();
  github = input.required<string>();
  idiomas = input.required<string>();
}
