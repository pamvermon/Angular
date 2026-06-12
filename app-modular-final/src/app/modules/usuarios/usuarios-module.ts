import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { UsuariosList } from './pages/usuarios-list/usuarios-list';

@NgModule({
  declarations: [UsuariosList],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
