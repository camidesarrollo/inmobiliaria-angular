import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('abre y cierra el menú móvil', () => {
    const el: HTMLElement = fixture.nativeElement;
    const boton = el.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const nav = el.querySelector('nav')!;

    expect(nav.classList.contains('abierta')).toBe(false);
    boton.click();
    fixture.detectChanges();
    expect(nav.classList.contains('abierta')).toBe(true);
    expect(boton.getAttribute('aria-expanded')).toBe('true');

    el.querySelector<HTMLAnchorElement>('nav a')!.click();
    fixture.detectChanges();
    expect(nav.classList.contains('abierta')).toBe(false);
  });
});
