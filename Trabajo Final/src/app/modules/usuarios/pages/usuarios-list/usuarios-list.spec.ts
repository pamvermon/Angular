import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaComponent } from './usuarios-list';

describe('UsuariosList', () => {
  let component: UsuarioListaComponent;
  let fixture: ComponentFixture<UsuarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
