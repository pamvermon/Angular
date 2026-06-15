import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './pages/productos-list/productos-list';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle';

const routes: Routes = [
  { 
    path: '', 
    component: ProductoListaComponent
  },
  { 
    path: ':id', 
    component: ProductoDetalleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }