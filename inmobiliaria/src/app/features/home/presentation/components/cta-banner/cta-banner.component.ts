import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT_INFO } from '@core/config/contact.config';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';

// Llamado a la acción oscuro de ancho completo. Con `image` usa fotografía de fondo;
// sin ella, luces difusas verde/dorado. Lo proyectado se muestra bajo los botones (sellos de confianza).
@Component({
  selector: 'app-cta-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  host: { class: 'block' },
  template: `
    <section class="relative overflow-hidden bg-inverse-surface py-space-3xl text-inverse-on-surface">
      @if (image()) {
        <img [src]="image()" alt="" loading="lazy" class="absolute inset-0 size-full object-cover" />
        <div class="absolute inset-0 bg-inverse-surface/85 backdrop-blur-[2px]"></div>
      } @else {
        <div class="pointer-events-none absolute right-1/4 top-0 size-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full bg-secondary/15 blur-3xl"></div>
      }

      <div class="container-luxe relative z-10 flex flex-col items-center text-center">
        @if (eyebrow()) {
          <span class="mb-space-sm text-label-caps uppercase tracking-widest text-secondary-fixed">{{ eyebrow() }}</span>
        }
        <h2 class="mb-space-md max-w-4xl font-display text-headline-xl-mobile text-surface-bright md:text-headline-xl"
            [class.lg:text-display-hero]="size() === 'lg'">
          {{ title() }}
        </h2>
        <p class="mb-space-2xl max-w-2xl text-body-lg font-light text-surface-variant">{{ description() }}</p>

        <div class="flex w-full flex-col items-center justify-center gap-space-md sm:w-auto sm:flex-row">
          <a [routerLink]="primaryLink()"
             class="flex h-14 w-full items-center justify-center gap-space-sm rounded-full bg-primary-container px-space-xl
                    font-display text-headline-sm text-on-primary shadow-xl transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-primary sm:w-auto">
            <app-icon [name]="primaryIcon()" [size]="20" /> {{ primaryLabel() }}
          </a>
          @if (whatsappUrl) {
            <a [href]="whatsappUrl" target="_blank" rel="noopener"
               class="flex h-14 w-full items-center justify-center gap-space-sm rounded-full bg-white/15 px-space-xl
                      font-display text-headline-sm font-medium text-surface-bright backdrop-blur-md transition-all duration-300
                      hover:bg-white/25 sm:w-auto">
              <app-icon name="chat" [size]="20" class="text-primary-fixed" /> Conversar por WhatsApp
            </a>
          }
        </div>

        <div class="flex flex-wrap items-center justify-center gap-space-xl text-label-caps uppercase tracking-widest text-surface-variant empty:hidden [&:not(:empty)]:mt-space-2xl"><ng-content /></div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {
  eyebrow = input('Atención personalizada de alto nivel');
  title = input('Encuentra la casa de tus sueños');
  description = input('Nuestros asesores privados están listos para coordinar un recorrido confidencial y ayudarte a encontrar tu próximo hogar.');
  image = input<string | null>('assets/Imagenes/encuentra.jpg');
  primaryLabel = input('Contáctanos ahora');
  primaryLink = input('/contacto');
  primaryIcon = input<IconName>('mail');
  size = input<'md' | 'lg'>('md');

  protected readonly whatsappUrl = CONTACT_INFO.whatsappUrl;
}
