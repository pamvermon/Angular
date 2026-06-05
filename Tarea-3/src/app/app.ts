import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductos } from './components/lista-productos/lista-productos'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaProductos], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'TuProyectoAngular';
}