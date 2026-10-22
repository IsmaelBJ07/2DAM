import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { MainLayoutComponent } from './main-layout.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainLayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  seccionActiva = 'resumen';
  Foto = '/imagenes/foto.jpg';

  ciudad = 'Málaga';
  numero = '123456789';
  correo = 'ismael.belhach@example.com';
  github = 'https://github.com/ismaelbelhach';
  idiomas = 'Español, Inglés';

  sobreMi = 'Desarrollador interesado en aplicaciones web y nuevas tecnologías.';
  formacion = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  textoFooter = 'Currículum desarrollado con Angular';

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }
}
