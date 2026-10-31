import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { IconComponent } from '@shared/components/icon/icon.component';

export interface UfRange {
  label: string;
  min: number | null;
  max: number | null;
}

export interface PropertySearch {
  comuna: string | null;
  tipo: string | null;
  rangoUf: UfRange | null;
  dormitorios: number | null;
}

export const DEFAULT_COMUNAS = ['Vitacura', 'Lo Barnechea', 'Las Condes', 'Providencia', 'Santiago', 'Zapallar'];
export const DEFAULT_TIPOS = ['Casa', 'Departamento', 'Penthouse', 'Parcela', 'Oficina'];
export const DEFAULT_RANGOS_UF: UfRange[] = [
  { label: 'Hasta UF 10.000', min: null, max: 10000 },
  { label: 'UF 10.000 – 20.000', min: 10000, max: 20000 },
  { label: 'UF 20.000 – 40.000', min: 20000, max: 40000 },
  { label: 'Más de UF 40.000', min: 40000, max: null },
];

// Isla flotante de vidrio. tone="dark" cuando va sobre una fotografía (hero).
// <app-search-console (search)="buscar($event)" />
@Component({
  selector: 'app-search-console',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './search-console.component.html',
  host: { class: 'block' },
})
export class SearchConsoleComponent {
  comunas = input(DEFAULT_COMUNAS);
  tipos = input(DEFAULT_TIPOS);
  rangosUf = input(DEFAULT_RANGOS_UF);
  tone = input<'light' | 'dark'>('light');

  search = output<PropertySearch>();

  protected readonly dormitoriosOpciones = [1, 2, 3, 4, 5];

  protected comuna = signal<string | null>(null);
  protected tipo = signal<string | null>(null);
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
      tipo: this.tipo(),
      rangoUf: rango === null ? null : this.rangosUf()[rango],
      dormitorios: this.dormitorios(),
    });
  }
}
