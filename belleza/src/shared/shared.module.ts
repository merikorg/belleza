import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { CardProductModalComponent } from './card-product-modal/card-product-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CardProductComponent,
    CardProductModalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardProductComponent,
    CardProductModalComponent,
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule { }
