import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type LoadingSize = 'sm' | 'md' | 'lg';

const SIZES: Record<LoadingSize, string> = {
  sm: 'size-4 border-2',
  md: 'size-8 border-2',
  lg: 'size-12 border-[3px]',
};

@Component({
  selector: 'app-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-3', role: 'status' },
  template: `
    <span class="animate-spin rounded-full" [class]="spinner()"></span>
    @if (showLabel()) {
      <span class="text-body-sm text-muted">{{ label() }}</span>
    } @else {
      <span class="sr-only">{{ label() }}</span>
    }
  `,
})
export class LoadingComponent {
  size = input<LoadingSize>('md');
  // light: sobre botones verdes o fotografía
  tone = input<'dark' | 'light'>('dark');
  label = input('Cargando…');
  showLabel = input(false);

  protected spinner = computed(() =>
    `${SIZES[this.size()]} ${this.tone() === 'light' ? 'border-white/40 border-t-white' : 'border-hairline border-t-green'}`,
  );
}
