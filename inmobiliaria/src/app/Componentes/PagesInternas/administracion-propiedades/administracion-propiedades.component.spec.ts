import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPropiedadesComponent } from './administracion-propiedades.component';

describe('AdministracionPropiedadesComponent', () => {
  let component: AdministracionPropiedadesComponent;
  let fixture: ComponentFixture<AdministracionPropiedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPropiedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
