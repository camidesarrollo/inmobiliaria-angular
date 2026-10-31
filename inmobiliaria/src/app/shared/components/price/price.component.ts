import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CurrencyService } from '@core/services/currency.service';
import { ClpPipe } from '../../pipes/clp.pipe';
import { UfPipe } from '../../pipes/uf.pipe';

// Jerarquía chilena: la moneda elegida en el header como cifra principal y la otra debajo.
// Si falta una de las dos, se muestra la que haya.
@Component({
  selector: 'app-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UfPipe, ClpPipe],
  host: { class: 'flex flex-col gap-0.5' },
  template: `
    @if (clpFirst()) {
      <span class="text-price-uf text-on-surface tabular-nums">{{ clp() | clp }}</span>
      @if (uf() != null) {
        <span class="text-price-clp text-on-surface-variant tabular-nums">~ {{ uf() | uf }}</span>
      } @else {
        <span class="text-price-clp text-on-surface-variant">CLP</span>
      }
    } @else if (uf() != null) {
      <span class="text-price-uf text-on-surface tabular-nums">{{ uf() | uf }}</span>
      @if (clp() != null) {
        <span class="text-price-clp text-on-surface-variant tabular-nums">~ {{ clp() | clp }} CLP</span>
      }
    } @else {
      <span class="text-price-clp text-on-surface-variant">Precio a consultar</span>
    }
  `,
})
export class PriceComponent {
  uf = input<number | null>();
  clp = input<number | null>();

  private currency = inject(CurrencyService).currency;

  protected clpFirst = computed(() =>
    this.clp() != null && (this.currency() === 'CLP' || this.uf() == null),
  );
}
