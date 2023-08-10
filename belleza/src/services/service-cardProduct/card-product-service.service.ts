import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardProductServiceService {

  private items: any[] = [];

  setShoppingCart(item: any) {
    this.items.push(item);
  }

  getShoppingCart() {
    return this.items;
  }

}
