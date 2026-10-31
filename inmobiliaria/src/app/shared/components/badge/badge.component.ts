import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

// gold: exclusividad · gold-soft: destacado sutil · glass: sobre fotografía · dark: sobre fondos claros
// primary: disponible / venta inmediata · secondary: exclusiva, signature · neutral: en verde, en blanco
export type BadgeVariant = 'gold' | 'gold-soft' | 'glass' | 'dark' | 'primary' | 'secondary' | 'neutral';

const VARIANTS: Record<BadgeVariant, string> = {
  gold: 'bg-gold text-charcoal',
  'gold-soft': 'bg-gold-soft text-on-secondary-container',
  glass: 'bg-white/85 text-charcoal border border-white/50 backdrop-blur-glass backdrop-saturate-160',
  dark: 'bg-charcoal text-canvas',
  primary: 'bg-primary-container text-on-primary shadow-sm',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed shadow-sm',
  neutral: 'bg-surface-container-highest text-on-surface shadow-sm',
};

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: `
    @if (dot()) {
      <span class="size-2 shrink-0 animate-pulse rounded-full bg-primary-container" aria-hidden="true"></span>
    }
    <ng-content />
  `,
})
export class BadgeComponent {
  variant = input<BadgeVariant>('gold');
  // Punto verde pulsante: "en vivo", sede activa, colección abierta
  dot = input(false);

  protected classes = computed(() => `badge-luxe ${VARIANTS[this.variant()]}`);
}
