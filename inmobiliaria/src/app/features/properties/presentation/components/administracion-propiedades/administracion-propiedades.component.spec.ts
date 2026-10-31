import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { AdministracionPropiedadesComponent } from './administracion-propiedades.component';
import { provideProperties } from '@features/properties/properties.providers';

describe('AdministracionPropiedadesComponent', () => {
  let component: AdministracionPropiedadesComponent;
  let fixture: ComponentFixture<AdministracionPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionPropiedadesComponent],
      providers: [provideProperties(), provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
