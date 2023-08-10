import { TestBed } from '@angular/core/testing';

import { CardProductServiceService } from './card-product-service.service';

describe('CardProductServiceService', () => {
  let service: CardProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
