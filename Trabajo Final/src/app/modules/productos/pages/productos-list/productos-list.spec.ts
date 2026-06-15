import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListaComponent } from './productos-list';

describe('ProductosList', () => {
  let component: ProductoListaComponent;
  let fixture: ComponentFixture<ProductoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
