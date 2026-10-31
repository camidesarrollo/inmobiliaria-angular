import { Directive } from '@angular/core';

// <input appInput>, <select appInput>, <textarea appInput>: alto 48px, borde hairline y foco verde
@Directive({
  selector: 'input[appInput], select[appInput], textarea[appInput]',
  host: { class: 'input-luxe' },
})
export class InputDirective {}
