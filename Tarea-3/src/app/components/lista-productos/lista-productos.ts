import { Component, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. INTERFAZ
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioConDescuento?: number; 
  fechaAlta: Date;
}

// 2. EL SERVICIO
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private listaProductos: Producto[] = [
    { id: 1, nombre: 'Notebook Pro', precio: 1500, fechaAlta: new Date(2026, 1, 10) },
    { id: 2, nombre: 'Teclado Mecánico', precio: 120, fechaAlta: new Date(2026, 2, 15) },
    { id: 3, nombre: 'Monitor 4K', precio: 450, fechaAlta: new Date(2026, 4, 2) }
  ];

  getProductos(): Producto[] {
    return this.listaProductos;
  }

  addProducto(producto: Producto): void {
    this.listaProductos.push(producto);
  }

  deleteProducto(id: number): void {
    this.listaProductos = this.listaProductos.filter(p => p.id !== id);
  }
}

// 3. EL COMPONENTE
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-productos.html',
  styles: [] // 👈 Cambiamos styleUrls por styles vacío para evitar errores si no existe el .css
})
export class ListaProductos implements OnInit { 
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    const deBase = this.productosService.getProductos();
    this.productos = deBase.map(prod => ({
      ...prod,
      precioConDescuento: prod.precio - (prod.precio * 15) / 100
    }));
  }

  simularAgregar(): void {
    const nuevo: Producto = {
      id: Date.now(),
      nombre: `Producto Random ${Math.floor(Math.random() * 100)}`,
      precio: Math.floor(Math.random() * 800) + 50,
      fechaAlta: new Date()
    };
    this.productosService.addProducto(nuevo);
    this.obtenerProductos();
  }

  eliminar(id: number): void {
    this.productosService.deleteProducto(id);
    this.obtenerProductos();
  }
}