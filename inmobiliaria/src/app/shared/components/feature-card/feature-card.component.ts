import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

// Tarjeta de pilar o beneficio: ícono, antetítulo opcional, título, texto y remate.
// <app-feature-card icon="gavel" eyebrow="Pilar I" title="Seguridad jurídica"
//                   description="…" footer="Blindaje notarial integral" footerIcon="check-circle" />
@Component({
  selector: 'app-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  host: { class: 'block' },
  template: `
    <article class="flex h-full flex-col rounded-lg bg-white p-space-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div class="mb-space-lg grid size-14 place-items-center"
           [class]="(shape() === 'circle' ? 'rounded-full ' : 'rounded-lg ') + iconClass()">
        <app-icon [name]="icon()" [size]="28" />
      </div>
      @if (eyebrow()) {
        <span class="text-label-caps font-bold uppercase tracking-wider text-secondary">{{ eyebrow() }}</span>
      }
      <h3 class="mb-space-sm font-display text-on-surface"
          [class]="size() === 'lg' ? 'mt-space-xs text-headline-lg-mobile md:text-headline-lg' : 'text-headline-md'">
        {{ title() }}
      </h3>
      <p class="text-body-md leading-relaxed text-on-surface-variant">{{ description() }}</p>
      @if (footer()) {
        <p class="mt-auto flex items-center gap-space-xs pt-space-lg text-label-md uppercase" [class]="accentClass()">
          {{ footer() }} <app-icon [name]="footerIcon()" [size]="16" />
        </p>
      }
    </article>
  `,
})
export class FeatureCardComponent {
  icon = input.required<IconName>();
  title = input.required<string>();
  description = input.required<string>();
  eyebrow = input<string>();
  footer = input<string>();
  footerIcon = input<IconName>('arrow-right');
  // Colores del contenedor del ícono, p. ej. 'bg-surface-container text-primary'
  iconClass = input('bg-surface-container text-primary');
  accentClass = input('text-primary');
  shape = input<'square' | 'circle'>('square');
  size = input<'md' | 'lg'>('md');
}
