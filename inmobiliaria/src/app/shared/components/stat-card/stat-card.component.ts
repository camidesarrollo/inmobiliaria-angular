import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

export type StatTone = 'primary' | 'secondary';

// Cifra destacada: 25+ años, 1.8M m², $2.4B…
// <app-stat-card icon="scroll" tag="Desde 2001" value="25" suffix="+" title="Años de trayectoria" description="…" />
@Component({
  selector: 'app-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  host: { class: 'block' },
  template: `
    <article class="flex h-full flex-col justify-between rounded-md bg-white p-space-xl shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div class="mb-space-sm flex items-center justify-between" [class]="tone() === 'primary' ? 'text-primary' : 'text-secondary'">
        <app-icon [name]="icon()" [size]="28" />
        @if (tag()) {
          <span class="rounded-sm px-2 py-0.5 text-label-caps uppercase tracking-wider" [class]="tagClass()">{{ tag() }}</span>
        }
      </div>
      <div>
        <p class="flex items-baseline font-display text-headline-xl-mobile font-semibold tracking-tight text-on-surface md:text-headline-xl">
          @if (prefix()) {
            <span class="mr-1 text-headline-lg text-on-surface-variant">{{ prefix() }}</span>
          }
          <span>{{ value() }}</span>
          @if (suffix()) {
            <span [class]="suffixStyle() === 'unit' ? 'ml-1 text-headline-lg text-secondary' : 'text-primary-container'">{{ suffix() }}</span>
          }
        </p>
        <h3 class="mt-1 font-display text-headline-sm text-on-surface">{{ title() }}</h3>
        @if (description()) {
          <p class="mt-space-xs text-body-sm leading-relaxed text-on-surface-variant">{{ description() }}</p>
        }
      </div>
    </article>
  `,
})
export class StatCardComponent {
  icon = input.required<IconName>();
  value = input.required<string>();
  title = input.required<string>();
  description = input<string>();
  tag = input<string>();
  prefix = input<string>();
  suffix = input<string>();
  // accent: "+" en verde · unit: palabra junto a la cifra ("3 Sedes")
  suffixStyle = input<'accent' | 'unit'>('accent');
  tone = input<StatTone>('primary');

  protected tagClass = computed(() =>
    this.tone() === 'primary' ? 'bg-primary-fixed/50 text-on-primary-fixed' : 'bg-secondary-fixed/50 text-on-secondary-fixed',
  );
}
