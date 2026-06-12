import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle';

@NgModule({
  declarations: [
    // ❌ SACALO DE ACÁ (borrá la línea si estaba acá)
  ],
  imports: [
    CommonModule,
    ProductoDetalleComponent //  PONELO ACÁ, como si fuera otro módulo
  ]
})
export class ProductosModule { }