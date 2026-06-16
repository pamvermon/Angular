import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'productos',
    // Si tenés los componentes creados, los podés cargar directo acá arriba así:
    // loadComponent: () => import('./modules/productos/productos.component').then(m => m.ProductosComponent)
    children: [] 
  },
  {
    path: 'usuarios',
    children: []
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  }
];