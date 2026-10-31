import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ClpPipe } from '../../pipes/clp.pipe';
import { UfPipe } from '../../pipes/uf.pipe';

// Jerarquía chilena: UF como cifra principal y su equivalente en CLP debajo.
// Si solo hay CLP, ese pasa a ser el principal.
@Component({
  selector: 'app-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UfPipe, ClpPipe],
  host: { class: 'flex flex-col gap-0.5' },
  template: `
    @if (uf() != null) {
      <span class="text-price-uf text-charcoal tabular-nums">{{ uf() | uf }}</span>
      @if (clp() != null) {
        <span class="text-price-clp text-muted tabular-nums">~ {{ clp() | clp }} CLP</span>
      }
    } @else if (clp() != null) {
      <span class="text-price-uf text-charcoal tabular-nums">{{ clp() | clp }}</span>
      <span class="text-price-clp text-muted">CLP</span>
    } @else {
      <span class="text-price-clp text-muted">Precio a consultar</span>
    }
  `,
})
export class PriceComponent {
  uf = input<number | null>();
  clp = input<number | null>();
}
