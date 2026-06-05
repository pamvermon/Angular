import { Injectable } from '@angular/core';

// Definimos la estructura que tendrá cada producto
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  fechaAlta: Date;
}

@Injectable({
  providedIn: 'root' 
})
export class ProductosService {
  
  // Array local simulado (hardcoded)
  private listaProductos: Producto[] = [
    { id: 1, nombre: 'Notebook Pro', precio: 1500, fechaAlta: new Date(2026, 1, 10) },
    { id: 2, nombre: 'Teclado Mecánico', precio: 120, fechaAlta: new Date(2026, 2, 15) },
    { id: 3, nombre: 'Monitor 4K', precio: 450, fechaAlta: new Date(2026, 4, 2) }
  ];

  constructor() { }

  // 1. Obtener la lista
  getProductos(): Producto[] {
    return this.listaProductos;
  }

  // 2. Agregar un producto
  addProducto(producto: Producto): void {
    this.listaProductos.push(producto);
  }

  // 3. Eliminar un producto por ID
  deleteProducto(id: number): void {
    this.listaProductos = this.listaProductos.filter(p => p.id !== id);
  }
}