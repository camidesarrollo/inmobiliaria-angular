import { ChangeDetectionStrategy, Component, ElementRef, computed, effect, input, model, viewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export type ModalSize = 'sm' | 'md' | 'lg';

const SIZES: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
};

// Usa <dialog> nativo: atrapa el foco, cierra con Esc y bloquea el fondo.
// <app-modal [(open)]="verContacto" title="Agendar visita">
//   …contenido…
//   <div modal-footer><button appButton>Enviar</button></div>
// </app-modal>
@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  open = model(false);
  title = input.required<string>();
  size = input<ModalSize>('md');
  closeOnBackdrop = input(true);

  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected sizeClass = computed(() => SIZES[this.size()]);

  constructor() {
    effect(() => {
      const el = this.dialog().nativeElement;
      if (this.open() && !el.open) {
        el.showModal();
      } else if (!this.open() && el.open) {
        el.close();
      }
    });
  }

  close(): void {
    this.open.set(false);
  }

  // El click cae sobre el propio <dialog> solo cuando es fuera del panel (en el ::backdrop)
  protected onDialogClick(event: MouseEvent): void {
    if (this.closeOnBackdrop() && event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}
