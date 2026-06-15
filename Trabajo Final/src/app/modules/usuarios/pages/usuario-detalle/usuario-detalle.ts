import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="font-family: sans-serif; padding: 10px;">
      <h2 style="color: #1e293b;">👤 Ficha del Usuario</h2>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
      
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; max-width: 500px;">
        <p style="font-size: 1.1rem; color: #64748b;">ID de Usuario consultado: <strong style="color: #0f172a;">{{ usuarioId }}</strong></p>
        <h3 style="color: #0f172a; margin: 15px 0 5px 0;">Auditoría de Cuenta:</h3>
        <p style="margin: 5px 0;"><strong>Último acceso:</strong> Hoy en producción</p>
        <p style="margin: 5px 0;"><strong>Permisos del Sistema:</strong> Escritura / Modificación</p>
      </div>

      <br>
      <a routerLink="/usuarios" style="display: inline-block; background: #64748b; color: white; padding: 10px 16px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        ← Volver a usuarios
      </a>
    </div>
  `
})
export class UsuarioDetalleComponent implements OnInit {
  usuarioId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id');
  }
}