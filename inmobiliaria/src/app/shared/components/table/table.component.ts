import { ChangeDetectionStrategy, Component, Directive, TemplateRef, computed, contentChildren, inject, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

export interface TableColumn {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
}

// Celda personalizada: <ng-template appTableCell="valor" let-row>{{ row.valor | clp }}</ng-template>
@Directive({ selector: 'ng-template[appTableCell]' })
export class TableCellDirective {
  key = input.required<string>({ alias: 'appTableCell' });
  template = inject(TemplateRef);
}

const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };

@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, LoadingComponent],
  templateUrl: './table.component.html',
})
export class TableComponent<T extends object> {
  columns = input.required<TableColumn[]>();
  rows = input.required<T[]>();
  loading = input(false);
  emptyMessage = input('No hay registros para mostrar.');
  caption = input<string>();

  private cells = contentChildren(TableCellDirective);

  protected cellTemplates = computed(() =>
    new Map(this.cells().map(cell => [cell.key(), cell.template])),
  );

  protected alignClass(column: TableColumn): string {
    return ALIGN[column.align ?? 'left'];
  }

  protected value(row: T, key: string): unknown {
    return (row as Record<string, unknown>)[key];
  }
}
