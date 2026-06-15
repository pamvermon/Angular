import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleComponent } from './producto-detalle';

describe('ProductoDetalle', () => {
  let component: ProductoDetalleComponent;
  let fixture: ComponentFixture<ProductoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoDetalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoDetalleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
