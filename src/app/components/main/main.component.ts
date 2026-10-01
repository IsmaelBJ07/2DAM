import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sobreMi = 'Desarrollador interesado en aplicaciones web y nuevas tecnologías.';
  empresa = 'REWE';
  puesto = 'ABAP Junior Developer';
  formacion = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  tecnologias = ['HTML', 'CSS', 'Angular', 'Java', 'JS', 'SQL', 'Git', 'GitHub', 'ABAP'];
}
