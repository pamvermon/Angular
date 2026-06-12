import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // 
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [
    RouterLink 
  ],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h3>🔍 Detalle del Producto</h3>
      <p style="font-size: 1.2rem;">Estás viendo el detalle del producto con ID: <strong>{{ productoId }}</strong></p>
      <br>
      <a routerLink="/productos" style="color: #0056b3; text-decoration: none; font-weight: bold; cursor: pointer;">
        ← Volver al listado
      </a>
    </div>
  `
})
export class ProductoDetalleComponent implements OnInit {
  productoId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get('id');
  }
}