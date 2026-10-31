import { TestBed } from '@angular/core/testing';

import { CurrencyService } from '@core/services/currency.service';
import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  function render(uf: number | null, clp: number | null): string[] {
    const fixture = TestBed.createComponent(PriceComponent);
    fixture.componentRef.setInput('uf', uf);
    fixture.componentRef.setInput('clp', clp);
    fixture.detectChanges();
    return Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('span')).map(s => s.textContent!.trim());
  }

  it('muestra UF como principal por defecto', () => {
    expect(render(24500, 915000000)).toEqual(['UF 24.500', '~ $915.000.000 CLP']);
  });

  it('pone CLP primero cuando el usuario elige CLP', () => {
    TestBed.inject(CurrencyService).set('CLP');
    expect(render(24500, 915000000)).toEqual(['$915.000.000', '~ UF 24.500']);
  });

  it('usa CLP si no hay valor en UF', () => {
    expect(render(null, 915000000)).toEqual(['$915.000.000', 'CLP']);
  });
});
