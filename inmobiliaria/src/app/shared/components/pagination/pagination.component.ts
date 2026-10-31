import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export type PageItem = number | 'ellipsis';

// 1 … 4 5 6 … 20: siempre la primera, la última y las vecinas de la actual
export function buildPages(current: number, total: number, siblings = 1): PageItem[] {
  if (total <= 0) {
    return [];
  }
  const first = Math.max(2, current - siblings);
  const last = Math.min(total - 1, current + siblings);
  const pages: PageItem[] = [1];
  if (first > 2) {
    pages.push('ellipsis');
  }
  for (let p = first; p <= last; p++) {
    pages.push(p);
  }
  if (last < total - 1) {
    pages.push('ellipsis');
  }
  if (total > 1) {
    pages.push(total);
  }
  return pages;
}

// <app-pagination [(page)]="pagina" [totalPages]="10" />
@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  page = model(1);
  totalPages = input.required<number>();

  protected pages = computed(() => buildPages(this.page(), this.totalPages()));

  goTo(page: number): void {
    if (page >= 1 && page <= this.totalPages() && page !== this.page()) {
      this.page.set(page);
    }
  }
}
