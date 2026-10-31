import { Pipe, PipeTransform } from '@angular/core';

const formatter = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 });

// 915000000 → "$915.000.000"
@Pipe({ name: 'clp' })
export class ClpPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return '';
    }
    return `$${formatter.format(value)}`;
  }
}
