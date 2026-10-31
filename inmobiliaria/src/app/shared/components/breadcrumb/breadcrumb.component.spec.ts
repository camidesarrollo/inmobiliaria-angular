import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  it('enlaza los niveles intermedios y marca el último como página actual', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(BreadcrumbComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Inicio', link: '/' },
      { label: 'Nosotros', link: '/nosotros' },
      { label: 'Historia' },
    ]);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    const links = Array.from(el.querySelectorAll('a')).map(a => a.getAttribute('href'));
    expect(links).toEqual(['/', '/nosotros']);
    expect(el.querySelector('[aria-current="page"]')!.textContent!.trim()).toBe('Historia');
  });
});
