import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div style="font-family: sans-serif; max-width: 500px;">
      <h2>📝 Alta de Nuevo Usuario</h2>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">

      <form (submit)="guardarUsuario($event)" style="display: flex; flex-direction: column; gap: 15px;">
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #475569;">Nombre Completo:</label>
          <input type="text" placeholder="Ej: Juan Pérez" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
        </div>

        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #475569;">Correo Electrónico:</label>
          <input type="email" placeholder="juan@empresa.com" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
        </div>

        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #475569;">Rol de Sistema:</label>
          <select style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
            <option value="Administrador">Administrador</option>
            <option value="Desarrollador">Desarrollador</option>
            <option value="Soporte">Soporte</option>
          </select>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 10px;">
          <button type="submit" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer;">
            Guardar
          </button>
          <a routerLink="/usuarios" style="background: #ef4444; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center;">
            Cancelar
          </a>
        </div>
      </form>
    </div>
  `
})
export class UsuarioFormComponent {
  // Inyectamos Router para mandar al usuario de vuelta a la lista tras guardar
  constructor(private router: Router) {}

  guardarUsuario(event: Event) {
    event.preventDefault(); // Evitamos que la página web recargue por el formulario
    alert('¡Usuario guardado exitosamente de forma simulada!');
    this.router.navigate(['/usuarios']); // Redirección por código
  }
}