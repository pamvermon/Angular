import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(value: number, discountPercent: number): number {

    //Valor invalido 
    if(!value || isNaN(value)){
      return 0
    }

    //en caso de Descuento invalido devolvemos el precio sin modificar
    if(!discountPercent || isNaN(discountPercent) || discountPercent <= 0){
      return value
    }

    const discount = value * (discountPercent / 100)

    return value - discount
  }
}
