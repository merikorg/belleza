import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductModalComponent } from './card-product-modal.component';

describe('CardProductModalComponent', () => {
  let component: CardProductModalComponent;
  let fixture: ComponentFixture<CardProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
