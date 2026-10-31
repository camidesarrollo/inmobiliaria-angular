import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BadgeComponent } from '@shared/components/badge/badge.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { PriceComponent } from '@shared/components/price/price.component';
import { SpecPillComponent } from '@shared/components/spec-pill/spec-pill.component';
import { StatusChipComponent } from '@shared/components/status-chip/status-chip.component';
import { PropertyCard } from './property-card.model';

// <app-property-card [property]="card" [(favorite)]="esFavorito" />
@Component({
  selector: 'app-property-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, BadgeComponent, IconComponent, PriceComponent, SpecPillComponent, StatusChipComponent],
  templateUrl: './property-card.component.html',
  host: { class: 'block' },
})
export class PropertyCardComponent {
  property = input.required<PropertyCard>();
  favorite = model(false);

  protected link = computed(() => ['/anuncio', this.property().id]);

  protected toggleFavorite(): void {
    this.favorite.update(value => !value);
  }
}
