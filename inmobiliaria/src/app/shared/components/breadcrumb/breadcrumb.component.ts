import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

// Barra de ruta para páginas internas. Lo proyectado aparece a la derecha (desde tablet):
// <app-breadcrumb [items]="[{ label: 'Inicio', link: '/' }, { label: 'Nosotros' }]">
//   <span>Fundada en 2001</span>
// </app-breadcrumb>
@Component({
  selector: 'app-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: { class: 'block bg-surface-container-low py-space-sm' },
  template: `
    <div class="container-luxe flex flex-wrap items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
      <nav aria-label="Ruta de navegación">
        <ol class="flex flex-wrap items-center gap-space-xs tracking-wide">
          @for (item of items(); track item.label; let last = $last) {
            <li class="flex items-center gap-space-xs">
              @if (item.link && !last) {
                <a [routerLink]="item.link" class="transition-colors hover:text-primary">{{ item.label }}</a>
              } @else {
                <span [attr.aria-current]="last ? 'page' : null"
                      class="font-medium" [class]="last ? 'text-secondary' : 'text-on-surface'">{{ item.label }}</span>
              }
              @if (!last) {
                <span class="font-light text-outline-variant" aria-hidden="true">/</span>
              }
            </li>
          }
        </ol>
      </nav>
      <div class="hidden items-center gap-space-md text-label-caps uppercase tracking-widest sm:flex">
        <ng-content />
      </div>
    </div>
  `,
})
export class BreadcrumbComponent {
  items = input.required<BreadcrumbItem[]>();
}
