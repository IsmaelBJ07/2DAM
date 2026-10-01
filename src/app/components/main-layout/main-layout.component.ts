import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AsideComponent, MainComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {}
