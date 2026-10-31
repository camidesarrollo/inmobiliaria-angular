import { ChangeDetectionStrategy, Component } from '@angular/core';

// Bloque de carga; el tamaño se da desde fuera: <app-skeleton class="h-6 w-1/2" />
@Component({
  selector: 'app-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block animate-pulse rounded-base bg-hairline', 'aria-hidden': 'true' },
  template: ``,
})
export class SkeletonComponent {}
