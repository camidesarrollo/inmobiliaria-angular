import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Fotografía con degradado y rótulo inferior. La altura se da desde fuera:
// <app-image-tile class="h-64" image="assets/…" label="San Damián • Santiago" />
@Component({
  selector: 'app-image-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative block overflow-hidden rounded-md bg-surface-container shadow-sm' },
  template: `
    <img [src]="image()" [alt]="alt() ?? label()" loading="lazy" class="size-full object-cover" />
    <div class="absolute inset-0 flex items-end bg-linear-to-t from-inverse-surface/70 to-transparent p-space-md">
      <span class="text-label-caps font-semibold uppercase tracking-wider text-surface-bright">{{ label() }}</span>
    </div>
  `,
})
export class ImageTileComponent {
  image = input.required<string>();
  label = input.required<string>();
  alt = input<string>();
}
