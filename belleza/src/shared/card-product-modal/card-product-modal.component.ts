import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product-modal',
  templateUrl: './card-product-modal.component.html',
  styleUrls: ['./card-product-modal.component.css']
})

export class CardProductModalComponent implements OnInit {
  @Input() item:any[] = [];

  total: number = 0 ;

  constructor() {
  }

  ngOnInit(): void {
  }

}
