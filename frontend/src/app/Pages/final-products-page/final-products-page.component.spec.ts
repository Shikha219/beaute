import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProductsPageComponent } from './final-products-page.component';

describe('FinalProductsPageComponent', () => {
  let component: FinalProductsPageComponent;
  let fixture: ComponentFixture<FinalProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
