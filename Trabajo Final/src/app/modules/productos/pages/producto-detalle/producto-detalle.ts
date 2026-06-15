import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="font-family: sans-serif; padding: 10px;">
      <h2 style="color: #1e293b;">🔍 Detalle del Producto</h2>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
      
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; max-width: 500px;">
        <p style="font-size: 1.1rem; color: #64748b;">ID del Producto consultado: <strong style="color: #0f172a;">{{ productoId }}</strong></p>
        <h3 style="color: #0f172a; margin: 15px 0 5px 0;">Mock de Información:</h3>
        <p style="margin: 5px 0;"><strong>Estado en depósito:</strong> Disponible</p>
        <p style="margin: 5px 0;"><strong>Proveedor:</strong> Distribuidora Oficial S.A.</p>
      </div>

      <br>
      <a routerLink="/productos" style="display: inline-block; background: #64748b; color: white; padding: 10px 16px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        ← Volver al catálogo
      </a>
    </div>
  `
})
export class ProductoDetalleComponent implements OnInit {
  productoId: string | null = null;

  // Inyectamos ActivatedRoute para leer los parámetros de la URL
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturamos el id de la URL de forma análoga
    this.productoId = this.route.snapshot.paramMap.get('id');
  }
}