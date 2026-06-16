import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./modules/inicio/inicio').then(m => m.InicioComponent)
  },
  {
    path: 'productos',
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/productos/pages/productos-list/productos-list').then(m => m.ProductoListaComponent)
      },
      {
        path: 'detalle',
        loadComponent: () => import('./modules/productos/pages/producto-detalle/producto-detalle').then(m => m.ProductoDetalleComponent)
      }
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/usuarios/pages/usuarios-list/usuarios-list').then(m => m.UsuarioListaComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];