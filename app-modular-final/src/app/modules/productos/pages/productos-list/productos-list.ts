import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 👈 1. IMPORTÁ ESTO

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink // 👈 2. AGREGALO ACÁ
  ], 
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>📦 Sección de Productos</h2>
      <ul style="font-size: 1.1rem; line-height: 2;">
        <li *ngFor="let p of productos">
          <a [routerLink]="['/productos', p.id]" style="color: #0056b3; text-decoration: none; cursor: pointer;">
            Ver {{ p.nombre }}
          </a>
        </li>
      </ul>
    </div>
  `
})
export class ProductosList {
  // Ajustamos la lista para que tenga IDs numéricos
  productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
}