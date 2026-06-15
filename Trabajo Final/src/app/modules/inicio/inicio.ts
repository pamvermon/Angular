import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="text-align: center; padding: 40px 0;">
      <h1 style="color: #1e293b; font-size: 2.5rem; margin-bottom: 10px;">¡Bienvenido al Sistema de Gestión!</h1>
      <p style="color: #64748b; font-size: 1.2rem;">Desde el menú lateral podrás administrar el catálogo de productos y el control de usuarios de la plataforma.</p>
    </div>
  `
})
export class InicioComponent {}