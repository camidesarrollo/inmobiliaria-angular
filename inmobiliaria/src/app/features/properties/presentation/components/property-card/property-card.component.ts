import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BadgeComponent } from '@shared/components/badge/badge.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { PriceComponent } from '@shared/components/price/price.component';
import { PropertyCard } from './property-card.model';

// <app-property-card [property]="card" [(favorite)]="esFavorito" />
@Component({
  selector: 'app-property-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, BadgeComponent, IconComponent, PriceComponent],
  templateUrl: './property-card.component.html',
  host: { class: 'block' },
})
export class PropertyCardComponent {
  property = input.required<PropertyCard>();
  favorite = model(false);

  protected link = computed(() => ['/anuncio', this.property().id]);

  // Matriz de specs: solo las que vienen informadas
  protected specs = computed(() => {
    const p = this.property();
    return [
      { label: 'Dorm.', value: p.bedrooms != null ? `${p.bedrooms} d` : null },
      { label: 'Baños', value: p.bathrooms != null ? `${p.bathrooms} b` : null },
      { label: 'Estac.', value: p.parking != null ? `${p.parking} est` : null },
      { label: 'Útiles', value: p.area != null ? `${p.area} m²` : null },
    ].filter(spec => spec.value !== null);
  });

  protected toggleFavorite(): void {
    this.favorite.update(value => !value);
  }
}
