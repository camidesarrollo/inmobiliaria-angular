import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { IndexAnuncioComponent } from './index-anuncio.component';

describe('IndexAnuncioComponent', () => {
  let component: IndexAnuncioComponent;
  let fixture: ComponentFixture<IndexAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexAnuncioComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
