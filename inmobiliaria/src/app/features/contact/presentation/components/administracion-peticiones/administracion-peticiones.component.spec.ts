import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { AdministracionPeticionesComponent } from './administracion-peticiones.component';

describe('AdministracionPeticionesComponent', () => {
  let component: AdministracionPeticionesComponent;
  let fixture: ComponentFixture<AdministracionPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionPeticionesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
