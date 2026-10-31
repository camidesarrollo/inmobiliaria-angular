import { Pipe, PipeTransform } from '@angular/core';

const formatter = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 2 });

// 24500 → "UF 24.500"
@Pipe({ name: 'uf' })
export class UfPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return '';
    }
    return `UF ${formatter.format(value)}`;
  }
}
