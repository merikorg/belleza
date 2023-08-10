import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  title:string = '';
  description: string = '';
  precio: number= 0;

  constructor() { }

  ngOnInit(): void {
  }

}
