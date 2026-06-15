import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>📦 Catálogo de Productos</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
      <div *ngFor="let prod of productos" style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; position: relative;">
        <h3 style="margin-top: 0; color: #1e293b;">{{ prod.titulo }}</h3>
        <p style="color: #64748b; font-size: 0.9rem;">{{ prod.descripcion }}</p>
        <p style="font-size: 1.2rem; font-weight: bold; color: #0f172a;">
          {{ prod.precio | currency:'ARS':'symbol':'1.0-0' }}
          <span *ngIf="prod.descuento" style="color: #ef4444; font-size: 0.8rem; margin-left: 10px;">({{ prod.descuento }}% OFF)</span>
        </p>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
          <a [routerLink]="['/productos', prod.id]" style="background: #38bdf8; color: white; padding: 8px 12px; text-decoration: none; border-radius: 6px; font-size: 0.9rem;">Ver detalle</a>
          <button (click)="eliminar(prod.id)" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">Eliminar</button>
        </div>
      </div>
    </div>
  `
})
export class ProductoListaComponent {
  productos = [
    { id: 1, titulo: 'Notebook Pro 15', precio: 1250000, descripcion: 'Procesador de última generación con 16GB de RAM.', descuento: 10 },
    { id: 2, titulo: 'Teclado Mecánico', precio: 95000, descripcion: 'Switches red, ideal para desarrollo y escritura suave.', descuento: null },
    { id: 3, titulo: 'Monitor Ergonómico 27', precio: 430000, descripcion: 'Resolución 2K con panel IPS protector de vista.', descuento: 15 }
  ];

  eliminar(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    alert(`Producto con ID ${id} eliminado localmente.`);
  }
}