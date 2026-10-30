import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { IndexNosotrosComponent } from './index-nosotros.component';

describe('IndexNosotrosComponent', () => {
  let component: IndexNosotrosComponent;
  let fixture: ComponentFixture<IndexNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexNosotrosComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
