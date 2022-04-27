import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPeticionesComponent } from './administracion-peticiones.component';

describe('AdministracionPeticionesComponent', () => {
  let component: AdministracionPeticionesComponent;
  let fixture: ComponentFixture<AdministracionPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
