import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  seccion = input('resumen');
  sobreMi = input.required<string>();
  formacion = input.required<string>();

  experiencias = [
    {
      id: 1,
      empresa: 'REWE',
      puesto: 'ABAP Junior Developer',
      periodo: 'No especificado',
      descripcion: 'Puesto de ABAP Junior Developer en REWE.'
    }
  ];

  tecnologias = ['HTML', 'CSS', 'Angular', 'Java', 'JS', 'SQL', 'Git', 'GitHub', 'ABAP'];
  tecnologiaSeleccionada = '';
}
