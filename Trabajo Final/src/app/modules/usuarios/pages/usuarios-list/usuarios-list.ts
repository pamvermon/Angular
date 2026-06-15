import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2>👥 Gestión de Usuarios</h2>
      <a routerLink="/usuarios/crear" style="background: #10b981; color: white; padding: 10px 16px; text-decoration: none; border-radius: 6px; font-weight: bold;">+ Crear Usuario</a>
    </div>

    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f8fafc; text-align: left; border-bottom: 2px solid #e2e8f0;">
          <th style="padding: 12px;">Nombre</th>
          <th style="padding: 12px;">Correo</th>
          <th style="padding: 12px;">Rol</th>
          <th style="padding: 12px;">Estado</th>
          <th style="padding: 12px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of usuarios" style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px;">{{ user.nombre }}</td>
          <td style="padding: 12px;">{{ user.correo }}</td>
          <td style="padding: 12px;">{{ user.rol }}</td>
          <td style="padding: 12px;">
            <span [style.background]="user.activo ? '#dcfce7' : '#fee2e2'" [style.color]="user.activo ? '#16a34a' : '#dc2626'" style="padding: 4px 8px; border-radius: 12px; font-size: 0.85rem; font-weight: bold;">
              {{ user.activo ? 'Activo' : 'Inactivo' }}
            </span>
          </td>
          <td style="padding: 12px; display: flex; gap: 8px;">
            <a [routerLink]="['/usuarios', user.id]" style="background: #38bdf8; color: white; padding: 6px 10px; text-decoration: none; border-radius: 4px; font-size: 0.85rem;">Detalle</a>
            <button (click)="alternarEstado(user)" style="background: #64748b; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Estado</button>
            <button (click)="eliminar(user.id)" style="background: #ef4444; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsuarioListaComponent {
  usuarios = [
    { id: 1, nombre: 'Maxi Dantas', correo: 'maxi.dantas@empresa.com', rol: 'Administrador', activo: true },
    { id: 2, nombre: 'Ana Gomez', correo: 'ana.gomez@empresa.com', rol: 'Desarrollador', activo: true },
    { id: 3, nombre: 'Carlos Perez', correo: 'carlos.perez@empresa.com', rol: 'Soporte', activo: false }
  ];

  alternarEstado(user: any) {
    user.activo = !user.activo;
  }

  eliminar(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }
}