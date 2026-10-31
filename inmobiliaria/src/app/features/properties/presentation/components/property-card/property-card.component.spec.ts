import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Propiedades } from '../../../domain/models/propiedades.model';
import { PropertyCardComponent } from './property-card.component';
import { toPropertyCard } from './property-card.model';

describe('toPropertyCard', () => {
  it('traduce el modelo de la API a la tarjeta', () => {
    const propiedad = new Propiedades('abc', 'Casa La Dehesa', 5, 4, '420', 'Lo Barnechea', '', 915000000, '', '', '', 'Casa', 'Venta', '', '/foto.jpg');

    expect(toPropertyCard(propiedad)).toEqual({
      id: 'abc',
      title: 'Casa La Dehesa',
      location: 'Lo Barnechea',
      image: '/foto.jpg',
      tag: 'Venta',
      priceClp: 915000000,
      bedrooms: 4,
      bathrooms: 5,
      area: '420',
    });
  });
});

describe('PropertyCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('enlaza al detalle y alterna favorito', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    fixture.componentRef.setInput('property', { id: '42', title: 'Penthouse Vitacura', bedrooms: 3 });
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('h3 a')!.getAttribute('href')).toBe('/anuncio/42');

    const favorite = el.querySelector<HTMLButtonElement>('[aria-pressed]')!;
    favorite.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.favorite()).toBe(true);
    expect(favorite.getAttribute('aria-pressed')).toBe('true');
  });
});
