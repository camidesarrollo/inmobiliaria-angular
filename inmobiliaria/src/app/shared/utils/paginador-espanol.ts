import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginadorEspanol extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Mostrar';
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';
  override firstPageLabel = 'Primero';
  override lastPageLabel = 'Último';
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0) {
      return 'Mostrando 0 de 0 entradas';
    }
    const inicio = page * pageSize;
    const fin = Math.min(inicio + pageSize, length);
    return `Mostrando ${inicio + 1} a ${fin} de ${length} entradas`;
  };
}
