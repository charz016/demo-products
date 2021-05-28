import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRadioCardsComponent } from './product-radio-cards.component';

describe('ProductRadioCardsComponent', () => {
  let component: ProductRadioCardsComponent;
  let fixture: ComponentFixture<ProductRadioCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRadioCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRadioCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
