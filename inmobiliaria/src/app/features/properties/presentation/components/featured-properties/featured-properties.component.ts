import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { IconComponent } from '@shared/components/icon/icon.component';
import { SkeletonComponent } from '@shared/components/loading/skeleton.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { PropiedadesService } from '../../../application/services/propiedades.service';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { PropertyCard, toPropertyCard } from '../property-card/property-card.model';

type LoadState = 'loading' | 'ready' | 'error';

@Component({
  selector: 'app-featured-properties',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, SkeletonComponent, SectionHeadingComponent, PropertyCardComponent],
  templateUrl: './featured-properties.component.html',
  host: { class: 'block' },
})
export class FeaturedPropertiesComponent {
  limit = input(3);

  private propiedadesService = inject(PropiedadesService);

  protected state = signal<LoadState>('loading');
  protected properties = signal<PropertyCard[]>([]);
  protected readonly placeholders = [1, 2, 3];

  constructor() {
    this.propiedadesService.getPropiedades()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: propiedades => {
          this.properties.set(propiedades.slice(0, this.limit()).map(toPropertyCard));
          this.state.set('ready');
        },
        error: () => this.state.set('error'),
      });
  }
}
