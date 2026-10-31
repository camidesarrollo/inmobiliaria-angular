import { Injectable, signal } from '@angular/core';

export type Currency = 'UF' | 'CLP';

const STORAGE_KEY = 'MONEDA';

// Moneda principal en que el usuario prefiere ver los precios (selector UF | CLP del header)
@Injectable({ providedIn: 'root' })
export class CurrencyService {
  readonly currency = signal<Currency>(this.read());

  set(currency: Currency): void {
    this.currency.set(currency);
    try {
      localStorage.setItem(STORAGE_KEY, currency);
    } catch {
      // sin almacenamiento disponible la preferencia dura solo la sesión
    }
  }

  private read(): Currency {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'CLP' ? 'CLP' : 'UF';
    } catch {
      return 'UF';
    }
  }
}
