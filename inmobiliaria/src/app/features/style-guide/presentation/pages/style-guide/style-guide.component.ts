import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { SkeletonComponent } from '@shared/components/loading/skeleton.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { PriceComponent } from '@shared/components/price/price.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { SpecPillComponent } from '@shared/components/spec-pill/spec-pill.component';
import { StatusChipComponent } from '@shared/components/status-chip/status-chip.component';
import { TableCellDirective, TableColumn, TableComponent } from '@shared/components/table/table.component';
import { InputDirective } from '@shared/directives/input.directive';
import { ClpPipe } from '@shared/pipes/clp.pipe';
import { PropertyCardComponent } from '@features/properties/presentation/components/property-card/property-card.component';
import { PropertyCard } from '@features/properties/presentation/components/property-card/property-card.model';
import { PropertySearch, SearchConsoleComponent } from '@features/properties/presentation/components/search-console/search-console.component';

// Catálogo vivo del sistema de diseño (datos de ejemplo)
@Component({
  selector: 'app-style-guide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BadgeComponent, ButtonComponent, FormFieldComponent, IconComponent, LoadingComponent, SkeletonComponent,
    ModalComponent, PaginationComponent, PriceComponent, SectionHeadingComponent, SpecPillComponent,
    StatusChipComponent, TableComponent, TableCellDirective, InputDirective, ClpPipe, JsonPipe,
    PropertyCardComponent, SearchConsoleComponent,
  ],
  templateUrl: './style-guide.component.html',
})
export class StyleGuideComponent {
  protected modalOpen = signal(false);
  protected page = signal(4);
  protected lastSearch = signal<PropertySearch | null>(null);

  protected readonly colors = [
    { name: 'green', hex: '#71B100', className: 'bg-green' },
    { name: 'gold', hex: '#E0B84C', className: 'bg-gold' },
    { name: 'charcoal', hex: '#1F2421', className: 'bg-charcoal' },
    { name: 'canvas', hex: '#F7F5F0', className: 'bg-canvas' },
    { name: 'hairline', hex: '#E5E3DE', className: 'bg-hairline' },
    { name: 'hairline-strong', hex: '#D0CDC5', className: 'bg-hairline-strong' },
    { name: 'muted', hex: '#7A7D78', className: 'bg-muted' },
    { name: 'primary', hex: '#416900', className: 'bg-primary' },
  ];

  protected readonly properties: PropertyCard[] = [
    {
      id: 'demo-1', title: 'Casa mediterránea en La Dehesa', location: 'Lo Barnechea, Santiago',
      image: 'assets/Imagenes/anuncio1.jpg', tag: 'Lo Barnechea', exclusive: true,
      status: { label: 'Entrega inmediata', tone: 'available' },
      priceUf: 24500, priceClp: 915000000, bedrooms: 4, bathrooms: 5, parking: 3, area: 420,
    },
    {
      id: 'demo-2', title: 'Penthouse con vista a la cordillera', location: 'Vitacura, Santiago',
      image: 'assets/Imagenes/anuncio2.jpg', tag: 'Vitacura',
      status: { label: 'En verde', tone: 'pending' },
      priceUf: 18900, priceClp: 706000000, bedrooms: 3, bathrooms: 4, parking: 2, area: 265,
    },
    {
      id: 'demo-3', title: 'Refugio costero Zapallar Norte', location: 'Zapallar, Valparaíso',
      image: 'assets/Imagenes/anuncio3.jpg', tag: 'Zapallar',
      priceClp: 1250000000, bedrooms: 5, bathrooms: 5, area: 610,
    },
  ];

  protected readonly columns: TableColumn[] = [
    { key: 'nombre', header: 'Propiedad' },
    { key: 'comuna', header: 'Comuna' },
    { key: 'estado', header: 'Estado' },
    { key: 'valor', header: 'Valor', align: 'right' },
  ];

  protected readonly rows = [
    { nombre: 'Casa La Dehesa', comuna: 'Lo Barnechea', estado: 'Disponible', valor: 915000000 },
    { nombre: 'Penthouse Vitacura', comuna: 'Vitacura', estado: 'Reservada', valor: 706000000 },
    { nombre: 'Parcela Zapallar', comuna: 'Zapallar', estado: 'Vendida', valor: 1250000000 },
  ];
}
