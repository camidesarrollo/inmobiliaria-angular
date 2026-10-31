import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

// <app-spec-pill icon="bed" [value]="4" unit="d" label="Dormitorios" />  →  [🛏 4 d]
@Component({
  selector: 'app-spec-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  host: { class: 'spec-pill', '[attr.title]': 'label()' },
  template: `
    @if (icon(); as name) {
      <app-icon [name]="name" [size]="16" class="text-muted" />
    }
    <span>{{ value() }} {{ unit() }}</span>
    <span class="sr-only">{{ label() }}</span>
  `,
})
export class SpecPillComponent {
  value = input.required<string | number>();
  unit = input('');
  label = input.required<string>();
  icon = input<IconName>();
}
