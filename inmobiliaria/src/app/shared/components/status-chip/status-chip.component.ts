import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

// available: Entrega inmediata / Disponible · pending: En verde / En blanco · neutral: Vendida / Reservada
export type StatusTone = 'available' | 'pending' | 'neutral';

const DOTS: Record<StatusTone, string> = {
  available: 'bg-green',
  pending: 'bg-gold',
  neutral: 'bg-muted',
};

@Component({
  selector: 'app-status-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'status-chip' },
  template: `
    <span class="size-1.5 shrink-0 rounded-full" [class]="dot()"></span>
    <ng-content />
  `,
})
export class StatusChipComponent {
  tone = input<StatusTone>('available');

  protected dot = computed(() => DOTS[this.tone()]);
}
