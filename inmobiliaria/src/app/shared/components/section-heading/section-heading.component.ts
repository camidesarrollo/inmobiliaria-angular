import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Encabezado editorial: antetítulo en caps, título Playfair y bajada opcional
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-space-sm',
    '[class.items-center]': "align() === 'center'",
    '[class.text-center]': "align() === 'center'",
  },
  template: `
    @if (eyebrow()) {
      <span class="text-label-caps uppercase text-green-deep">{{ eyebrow() }}</span>
    }
    @switch (level()) {
      @case (1) {
        <h1 class="font-display text-display-hero-mobile md:text-display-hero">{{ title() }}</h1>
      }
      @case (2) {
        <h2 class="font-display text-headline-xl-mobile md:text-headline-xl">{{ title() }}</h2>
      }
      @default {
        <h3 class="font-display text-headline-lg-mobile md:text-headline-lg">{{ title() }}</h3>
      }
    }
    @if (subtitle()) {
      <p class="max-w-2xl text-body-lg text-muted">{{ subtitle() }}</p>
    }
    @if (divider()) {
      <span class="mt-space-sm block h-0.5 w-16 bg-secondary" aria-hidden="true"></span>
    }
  `,
})
export class SectionHeadingComponent {
  title = input.required<string>();
  eyebrow = input<string>();
  subtitle = input<string>();
  level = input<1 | 2 | 3>(2);
  align = input<'left' | 'center'>('left');
  divider = input(false);
}
