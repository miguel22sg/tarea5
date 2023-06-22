import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: './portada', icon: 'mail' },
    { title: 'Personajes', url: './personajes', icon: 'paper-plane' },
    { title: 'Momentos', url: './momentos', icon: 'heart' },
    { title: 'Acerca de', url: './acercade', icon: 'archive' },
    { title: 'En mi vida', url: './en-mi-vida', icon: 'trash' },
    { title: 'Contratame', url: './contratame', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}
