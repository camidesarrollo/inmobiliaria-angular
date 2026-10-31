import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Capítulo de la historia de la empresa. El cuerpo se proyecta para permitir <strong>, enlaces, etc.
// <app-story-chapter number="01" period="Origen (2001–2014)" title="…"><p>…</p></app-story-chapter>
@Component({
  selector: 'app-story-chapter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <article class="flex h-full flex-col gap-space-md rounded-md bg-white p-space-xl shadow-sm">
      <p class="flex items-center gap-space-sm text-label-caps font-semibold uppercase tracking-wider"
         [class]="tone() === 'primary' ? 'text-primary' : 'text-secondary'">
        <span class="grid size-8 shrink-0 place-items-center rounded-full bg-surface-container text-on-surface">{{ number() }}</span>
        <span>{{ period() }}</span>
      </p>
      <h3 class="font-display text-headline-md leading-tight text-on-surface">{{ title() }}</h3>
      <div class="flex flex-col gap-space-md text-body-md leading-relaxed text-on-surface-variant [&_strong]:text-on-surface">
        <ng-content />
      </div>
    </article>
  `,
})
export class StoryChapterComponent {
  number = input.required<string>();
  period = input.required<string>();
  title = input.required<string>();
  tone = input<'primary' | 'secondary'>('secondary');
}
