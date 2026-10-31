import { TestBed } from '@angular/core/testing';

import { PaginationComponent, buildPages } from './pagination.component';

describe('buildPages', () => {
  it('muestra todas las páginas cuando son pocas', () => {
    expect(buildPages(2, 4)).toEqual([1, 2, 3, 4]);
  });

  it('colapsa con elipsis alrededor de la página actual', () => {
    expect(buildPages(10, 20)).toEqual([1, 'ellipsis', 9, 10, 11, 'ellipsis', 20]);
  });

  it('no repite la primera ni la última', () => {
    expect(buildPages(1, 20)).toEqual([1, 2, 'ellipsis', 20]);
    expect(buildPages(20, 20)).toEqual([1, 'ellipsis', 19, 20]);
  });
});

describe('PaginationComponent', () => {
  it('cambia de página y marca la actual', () => {
    const fixture = TestBed.createComponent(PaginationComponent);
    fixture.componentRef.setInput('totalPages', 5);
    fixture.detectChanges();

    const next = fixture.nativeElement.querySelector('[aria-label="Página siguiente"]');
    next.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.page()).toBe(2);
    expect(fixture.nativeElement.querySelector('[aria-current="page"]').textContent.trim()).toBe('2');
  });
});
