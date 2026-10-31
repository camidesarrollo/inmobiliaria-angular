import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'sm';

// Se aplica sobre el elemento nativo para conservar su semántica:
// <button appButton variant="secondary">…</button>   <a appButton routerLink="/anuncios">…</a>
@Component({
  selector: 'button[appButton], a[appButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoadingComponent],
  host: {
    '[class]': 'classes()',
    '[attr.aria-busy]': 'loading() || null',
    '[attr.aria-disabled]': 'loading() || null',
  },
  template: `
    @if (loading()) {
      <app-loading size="sm" [tone]="variant() === 'primary' ? 'light' : 'dark'" />
    }
    <ng-content />
  `,
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  block = input(false);
  loading = input(false);

  protected classes = computed(() =>
    [
      'btn',
      `btn-${this.variant()}`,
      this.size() === 'sm' ? 'btn-sm' : '',
      this.block() ? 'btn-block' : '',
    ].join(' ').trim(),
  );
}
