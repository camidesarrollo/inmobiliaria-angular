import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Envuelve el control en un <label>, así queda asociado sin necesidad de ids:
// <app-form-field label="Email" [error]="emailError">
//   <input appInput type="email" [attr.aria-invalid]="!!emailError" />
// </app-form-field>
@Component({
  selector: 'app-form-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <label class="flex flex-col gap-space-sm">
      <span class="text-label-md uppercase text-charcoal">
        {{ label() }}
        @if (required()) {
          <span class="text-error" aria-hidden="true">*</span>
        }
      </span>
      <ng-content />
    </label>
    @if (error()) {
      <p class="mt-space-xs text-body-sm text-error" role="alert">{{ error() }}</p>
    } @else if (hint()) {
      <p class="mt-space-xs text-body-sm text-muted">{{ hint() }}</p>
    }
  `,
})
export class FormFieldComponent {
  label = input.required<string>();
  hint = input<string>();
  error = input<string | null>();
  required = input(false);
}
