import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosList } from './productos-list';

describe('ProductosList', () => {
  let component: ProductosList;
  let fixture: ComponentFixture<ProductosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
