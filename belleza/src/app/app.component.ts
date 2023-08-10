import { Component } from '@angular/core';
import { CardProductServiceService } from 'src/services/service-cardProduct/card-product-service.service';
import { ServiceDbService } from 'src/services/service-db/service-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'belleza';

  cards: any[] = [
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '12'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '123'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '1234'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '12345'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '123456'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '1234567'
    },
    {
      title: 'Labial',
      description: 'Labial rojo',
      price: '2500',
      url: '../assets/img/products/labial.webp',
      id: '12345678'
    },
  ];

  arrayModal: any[] = [];

  alert: boolean = false;
  text: string = '';
  type: string = '';

  constructor(private cardProduct: CardProductServiceService,
    private db: ServiceDbService){
    this.arrayModal = this.cardProduct.getShoppingCart();
    this.db.getData('SELECT * FROM Product').subscribe(data=>{
      console.log(data);
      
    });
  }

  listening(value: { type: string, text: string}) {
    this.type = value.type;
    this.text = value.text;
    this.alert = true;
    setTimeout(() => { this.alert = false; }, 2000);
  }

}
