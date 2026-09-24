import { DatePipe } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-angular';
  //Cabecera
  nombre = 'Ismael';
  apellidos = 'Belhach Jimenez';

  //Aside
  ciudad = 'Málaga';
  numero = '123456789';
  correo = 'ismael.belhach@example.com';
  github = 'https://github.com/ismaelbelhach';
  idiomas = 'Español, Inglés';

  // Main
  sobreMi = 'Desarrollador interesado en aplicaciones web y nuevas tecnologías.';
  empresa = 'REWE';
  puesto = 'ABAP Junior Developer';
  formacion = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  tecnologias = 'HTML · CSS · Angular · Java · SQL · Git · GitHub · ABAP';
  textoFooter = 'Currículum desarrollado con Angular';
  fecha = new Date();

  Foto = 'images/foto.jpg';

}
