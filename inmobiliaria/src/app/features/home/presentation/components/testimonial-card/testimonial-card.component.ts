import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconComponent } from '@shared/components/icon/icon.component';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  verifiedLabel?: string;
  rating?: number;
  avatar?: string;
}

@Component({
  selector: 'app-testimonial-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  host: { class: 'block' },
  template: `
    @let t = testimonial();
    <figure class="relative flex flex-col justify-between overflow-hidden rounded-lg bg-surface-container p-space-xl shadow-sm">
      <span aria-hidden="true"
            class="pointer-events-none absolute -top-4 right-4 select-none font-display text-[120px] leading-none text-secondary/20">“</span>

      @if (stars().length) {
        <div class="mb-space-md flex items-center gap-1 text-secondary" role="img" [attr.aria-label]="t.rating + ' de 5 estrellas'">
          @for (s of stars(); track $index) {
            <app-icon name="star" [size]="20" [filled]="true" />
          }
        </div>
      }

      <blockquote class="relative z-10 mb-space-xl font-display text-headline-sm italic leading-relaxed text-on-surface">
        “{{ t.quote }}”
      </blockquote>

      <figcaption class="flex items-center gap-space-md border-t border-outline-variant/30 pt-space-md">
        <div class="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-surface-container-high
                    font-display text-headline-sm text-on-surface ring-2 ring-secondary-fixed">
          @if (t.avatar) {
            <img [src]="t.avatar" alt="" class="size-full object-cover" />
          } @else {
            {{ initials() }}
          }
        </div>
        <div class="flex flex-col">
          <span class="font-display text-headline-sm text-on-surface">{{ t.name }}</span>
          <span class="text-body-sm text-on-surface-variant">{{ t.role }}</span>
          @if (t.verifiedLabel) {
            <span class="mt-1 inline-flex items-center gap-1 text-label-caps uppercase text-primary">
              <app-icon name="verified" [size]="14" /> {{ t.verifiedLabel }}
            </span>
          }
        </div>
      </figcaption>
    </figure>
  `,
})
export class TestimonialCardComponent {
  testimonial = input.required<Testimonial>();

  protected stars = computed(() => Array.from({ length: this.testimonial().rating ?? 0 }));

  protected initials = computed(() =>
    this.testimonial().name.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase(),
  );
}
