import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { IndexTestimonialesComponent } from './index-testimoniales.component';

describe('IndexTestimonialesComponent', () => {
  let component: IndexTestimonialesComponent;
  let fixture: ComponentFixture<IndexTestimonialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTestimonialesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTestimonialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
