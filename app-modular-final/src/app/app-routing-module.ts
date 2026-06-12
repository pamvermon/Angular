import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'usuarios', 
    pathMatch: 'full' 
  }, // Por ahora redirige a usuarios hasta que creemos el Home bien limpio
  { 
    path: 'usuarios', 
    loadChildren: () => import('./modules/usuarios/usuarios-module').then(m => m.UsuariosModule) 
  },
  { 
    path: 'productos', 
    loadChildren: () => import('./modules/productos/productos-module').then(m => m.ProductosModule) 
  },
  { 
    path: '**', 
    redirectTo: 'usuarios' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }