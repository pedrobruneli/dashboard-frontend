import { Pipe, PipeTransform } from '@angular/core';
import { ISellProduct } from '../models/product.model';

@Pipe({
  name: 'calculateTotal',
  pure: false
})
export class CalculateTotalPipe implements PipeTransform {

  transform(value: ISellProduct[], args?: any): any {
    return value.reduce((acc, curr) => acc + (curr.sale_price * curr.quantity), 0).toFixed(2).replace('.', ',')
  }

}
