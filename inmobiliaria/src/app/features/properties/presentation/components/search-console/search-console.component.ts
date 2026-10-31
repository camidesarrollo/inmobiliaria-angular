import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { IconComponent } from '@shared/components/icon/icon.component';

export interface UfRange {
  label: string;
  min: number | null;
  max: number | null;
}

export interface SearchTab {
  label: string;
  tipo: string;
}

export interface PropertySearch {
  comuna: string | null;
  tipo: string | null;
  rangoUf: UfRange | null;
  dormitorios: number | null;
}

export const DEFAULT_TABS: SearchTab[] = [
  { label: 'Casas', tipo: 'Casa' },
  { label: 'Departamentos', tipo: 'Departamento' },
];
export const DEFAULT_COMUNAS = ['Vitacura', 'Lo Barnechea', 'Las Condes', 'Providencia', 'Zapallar'];
export const DEFAULT_RANGOS_UF: UfRange[] = [
  { label: 'Hasta UF 35.000', min: null, max: 35000 },
  { label: 'Hasta UF 50.000', min: null, max: 50000 },
  { label: 'Hasta UF 75.000', min: null, max: 75000 },
  { label: 'Más de UF 75.000', min: 75000, max: null },
];

// Consola de búsqueda de vidrio: pestañas por tipo + ubicación, dormitorios y rango UF.
// <app-search-console (search)="buscar($event)" />
@Component({
  selector: 'app-search-console',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './search-console.component.html',
  host: { class: 'block' },
})
export class SearchConsoleComponent {
  tabs = input(DEFAULT_TABS);
  comunas = input(DEFAULT_COMUNAS);
  rangosUf = input(DEFAULT_RANGOS_UF);
  eyebrow = input<string>();

  search = output<PropertySearch>();

  protected readonly dormitoriosOpciones = [2, 3, 4, 5];

  protected tab = signal(0);
  protected comuna = signal<string | null>(null);
  protected rango = signal<number | null>(null);
  protected dormitorios = signal<number | null>(null);

  protected value(event: Event): string {
    return (event.target as HTMLSelectElement).value;
  }

  protected submit(event: Event): void {
    event.preventDefault();
    const rango = this.rango();
    this.search.emit({
      comuna: this.comuna(),
      tipo: this.tabs()[this.tab()]?.tipo ?? null,
      rangoUf: rango === null ? null : this.rangosUf()[rango],
      dormitorios: this.dormitorios(),
    });
  }
}
