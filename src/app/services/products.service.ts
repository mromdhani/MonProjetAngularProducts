import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): IProduct[] {
    return [
      { id : 'P100 From Service', name: 'Café', unitPrice: 222.5},
      { id : 'P200', name: 'Thé', unitPrice: 2},
      { id : 'P300', name: 'Jus d\'Orange', unitPrice: 3},
      { id : 'P400', name: 'Coca Cola', unitPrice: 2.5},
    ];
  }
}
