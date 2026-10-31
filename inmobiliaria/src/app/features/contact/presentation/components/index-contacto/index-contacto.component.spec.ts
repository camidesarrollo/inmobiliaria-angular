import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { IndexContactoComponent } from './index-contacto.component';

describe('IndexContactoComponent', () => {
  let component: IndexContactoComponent;
  let fixture: ComponentFixture<IndexContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexContactoComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
