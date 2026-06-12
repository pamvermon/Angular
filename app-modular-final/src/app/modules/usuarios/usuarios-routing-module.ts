import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosList } from './pages/usuarios-list/usuarios-list';

const routes: Routes = [
  { 
    path: '', 
    component: UsuariosList
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }