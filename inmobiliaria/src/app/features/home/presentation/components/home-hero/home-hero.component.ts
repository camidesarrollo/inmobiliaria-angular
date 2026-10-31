import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  PropertySearch,
  SearchConsoleComponent,
} from '@features/properties/presentation/components/search-console/search-console.component';

@Component({
  selector: 'app-home-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchConsoleComponent],
  templateUrl: './home-hero.component.html',
  host: { class: 'block' },
})
export class HomeHeroComponent {
  private router = inject(Router);

  protected readonly year = new Date().getFullYear();

  // Lleva los filtros al listado como query params: /anuncios?tipo=Casa&comuna=Vitacura…
  protected search(filters: PropertySearch): void {
    this.router.navigate(['/anuncios'], {
      queryParams: {
        tipo: filters.tipo ?? undefined,
        comuna: filters.comuna ?? undefined,
        dormitorios: filters.dormitorios ?? undefined,
        ufMin: filters.rangoUf?.min ?? undefined,
        ufMax: filters.rangoUf?.max ?? undefined,
      },
    });
  }
}
