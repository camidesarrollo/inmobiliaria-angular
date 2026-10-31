import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT_INFO } from '@core/config/contact.config';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  host: { class: 'block' },
})
export class FooterComponent {
  protected readonly contact = CONTACT_INFO;
  protected readonly year = new Date().getFullYear();

  protected readonly navigation = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Catálogo exclusivo', path: '/anuncios' },
    { label: 'Artículos y tendencias', path: '/blog' },
    { label: 'Mesa privada', path: '/contacto' },
  ];

  protected readonly legal = ['Política de privacidad', 'Términos de servicio', 'Reglamento de corretaje'];
}
