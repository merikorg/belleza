import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardProductServiceService } from 'src/services/service-cardProduct/card-product-service.service';
import { ServiceDbService } from 'src/services/service-db/service-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'belleza';

  cards: any[] = [];

  arrayModal: any[] = [];
  total: number = 0;
  formModal: FormGroup ;
  


  alert: boolean = false;
  text: string = '';
  type: string = '';

  constructor(
    private cardProduct: CardProductServiceService,
    private db: ServiceDbService,
    private formBuilder: FormBuilder
  ) {
    this.arrayModal = this.cardProduct.getShoppingCart();
    this.fetchData();

    this.formModal = this.formBuilder.group({
      direction: ['', Validators.required],
      document: ['', Validators.required]
    });
  }

  listening(value: { type: string, text: string }) {
    this.type = value.type;
    this.text = value.text;
    this.alert = true;
    setTimeout(() => { this.alert = false; }, 2000);

    this.calculateTotalPrice();
  }

  fetchData() {
    const query = 'SELECT * FROM Product ';

    this.db.getData(query).subscribe(
      response => {
        this.cards = response;
      },
      error => {
        this.type = 'danger';
        this.text = 'Error al obtener los datos.';
        this.alert = true;
        setTimeout(() => { this.alert = false; }, 2000);
      }
    );
  }

  calculateTotalPrice(): void {
    this.total = this.arrayModal.reduce((total, product) => total + parseFloat(product.price), 0);
  }

  addData(){
    if(this.formModal.valid && this.arrayModal.length>0){

    }else{
      this.type='danger';
      this.text='No se puede dejar campos vacios.';
      this.alert = true;
      setTimeout(() => { this.alert = false; }, 2000);
    }
  }


}
