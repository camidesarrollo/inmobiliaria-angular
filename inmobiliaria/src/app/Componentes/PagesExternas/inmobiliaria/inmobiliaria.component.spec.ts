import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { InmobiliariaComponent } from './inmobiliaria.component';

describe('InmobiliariaComponent', () => {
  let component: InmobiliariaComponent;
  let fixture: ComponentFixture<InmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmobiliariaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
