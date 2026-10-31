import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

// gold: exclusividad · gold-soft: destacado sutil · glass: sobre fotografía · dark: sobre fondos claros
export type BadgeVariant = 'gold' | 'gold-soft' | 'glass' | 'dark';

const VARIANTS: Record<BadgeVariant, string> = {
  gold: 'bg-gold text-charcoal',
  'gold-soft': 'bg-gold-soft text-on-secondary-container',
  glass: 'bg-white/85 text-charcoal border border-white/50 backdrop-blur-glass backdrop-saturate-160',
  dark: 'bg-charcoal text-canvas',
};

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: `<ng-content />`,
})
export class BadgeComponent {
  variant = input<BadgeVariant>('gold');

  protected classes = computed(() => `badge-luxe ${VARIANTS[this.variant()]}`);
}
