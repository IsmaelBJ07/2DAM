import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Ismael';
  apellidos = 'Belhach Jimenez';
  profesion = 'ABAP Junior Developer';
  descripcionPrincipal = 'Desarrollador interesado en aplicaciones web y nuevas tecnologías.';
  foto = '/assets/imagenes/foto.jpg';
}
