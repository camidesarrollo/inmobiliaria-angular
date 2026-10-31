import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from '@core/auth/services/auth.service';
import { CONTACT_INFO } from '@core/config/contact.config';
import { Currency, CurrencyService } from '@core/services/currency.service';
import { IconComponent } from '@shared/components/icon/icon.component';

export const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Propiedades', path: '/anuncios' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
];

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.component.html',
  host: {
    class: 'sticky top-0 z-50 block',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private currencyService = inject(CurrencyService);

  protected readonly links = NAV_LINKS;
  protected readonly brand = CONTACT_INFO;
  protected readonly currency = this.currencyService.currency;
  protected loggedIn = signal(this.authService.loggedIn());
  protected menuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => {
        this.closeMenu();
        this.loggedIn.set(this.authService.loggedIn());
      });
  }

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected setCurrency(currency: Currency): void {
    this.currencyService.set(currency);
  }

  protected logout(): void {
    this.authService.logout();
    this.loggedIn.set(false);
    this.router.navigateByUrl('/');
  }
}
