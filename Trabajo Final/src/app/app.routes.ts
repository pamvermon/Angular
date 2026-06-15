import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { 
    path: 'productos', 
    loadChildren: () => import('./modules/productos/productos.routes').then(m => m.PRODUCTOS_ROUTES) 
  },
  { 
    path: 'usuarios', 
    loadChildren: () => import('./modules/usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES) 
  },
  { path: '**', redirectTo: '' }
];