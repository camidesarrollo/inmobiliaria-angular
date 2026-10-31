import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { HeaderInternaComponent } from './header-interna.component';

describe('HeaderInternaComponent', () => {
  let component: HeaderInternaComponent;
  let fixture: ComponentFixture<HeaderInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInternaComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
