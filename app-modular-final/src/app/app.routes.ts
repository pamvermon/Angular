import { Routes } from '@angular/router';
import { ProductosList } from './modules/productos/pages/productos-list/productos-list';
import { UsuariosList } from './modules/usuarios/pages/usuarios-list/usuarios-list';
// 👇 Asegurate de importar tu componente de detalle aquí
import { ProductoDetalleComponent } from './modules/productos/pages/producto-detalle/producto-detalle';

export const routes: Routes = [
  { path: 'productos', component: ProductosList },
  // 👇 AGREGÁ ESTA NUEVA RUTA DINÁMICA:
  { path: 'productos/:id', component: ProductoDetalleComponent }, 
  
  { path: 'usuarios', component: UsuariosList },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
];