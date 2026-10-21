import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-temperatura',
  templateUrl: './display-temperatura.component.html',
  styleUrl: './display-temperatura.component.css',
})
export class DisplayTemperaturaComponent implements OnChanges {
  temperatura = input<number>(0);
  umbral = input<number>(25);
  alarma = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperatura'] || changes['umbral']) {
      this.alarma = this.temperatura() > this.umbral();
    }
  }
}
