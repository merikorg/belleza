import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardProductServiceService } from 'src/services/service-cardProduct/card-product-service.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})

export class CardProductComponent implements OnInit {

  @Input() item:any={};

  @Output() alert = new EventEmitter<{type:string,text:string}>();

  constructor(private cardProduct: CardProductServiceService) { }

  ngOnInit(): void {
    
  }

  sendData(id: string){
    this.cardProduct.setShoppingCart(this.item);
    this.alert.emit({type:'success',text:'Producto agregado correctamente.'});
  }

}
