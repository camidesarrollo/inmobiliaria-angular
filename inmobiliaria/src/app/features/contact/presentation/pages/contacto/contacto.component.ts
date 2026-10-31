import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { CONTACT_INFO } from '@core/config/contact.config';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { BreadcrumbComponent, BreadcrumbItem } from '@shared/components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { FormFieldComponent } from '@shared/components/form-field/form-field.component';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';
import { InputDirective } from '@shared/directives/input.directive';
import { ContactoService } from '../../../application/services/contacto.service';
import { Contacto, FormaDeContacto, TipoAccion } from '../../../domain/models/contacto.model';

type Estado = 'idle' | 'enviando' | 'enviado' | 'error';

interface Opcion<T> {
  value: T;
  label: string;
}

interface Canal {
  value: FormaDeContacto;
  label: string;
  icon: IconName;
}

interface Pilar {
  eyebrow: string;
  title: string;
  description: string;
}

const MENSAJES_ERROR: Record<string, string> = {
  required: 'Este campo es obligatorio',
  email: 'Ingresa un email válido',
  pattern: 'Ingresa un teléfono válido (8 a 9 dígitos)',
};

// Mañana en formato yyyy-mm-dd, para el valor por defecto y el mínimo del selector de fecha
function manana(): string {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + 1);
  const mm = String(fecha.getMonth() + 1).padStart(2, '0');
  const dd = String(fecha.getDate()).padStart(2, '0');
  return `${fecha.getFullYear()}-${mm}-${dd}`;
}

@Component({
  selector: 'app-contacto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contacto.component.html',
  imports: [
    ReactiveFormsModule, BadgeComponent, BreadcrumbComponent, ButtonComponent, FormFieldComponent,
    IconComponent, InputDirective,
  ],
})
export class ContactoComponent {
  private contactoService = inject(ContactoService);
  private fb = inject(NonNullableFormBuilder);

  protected readonly contact = CONTACT_INFO;
  protected readonly telefonoHref = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;
  protected readonly mapa = inject(DomSanitizer).bypassSecurityTrustResourceUrl(CONTACT_INFO.mapEmbedUrl);
  protected readonly fechaMinima = manana();

  protected readonly breadcrumb: BreadcrumbItem[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Contacto', link: '/contacto' },
    { label: 'Mesa de atención privada' },
  ];

  protected readonly operaciones: TipoAccion[] = ['Compra', 'Venta', 'Inversión'];

  protected readonly presupuestos: Opcion<number>[] = [
    { value: 20000, label: 'UF 20.000 – UF 35.000 (~ $780M - $1.350M CLP)' },
    { value: 35000, label: 'UF 35.000 – UF 50.000 (~ $1.350M - $1.950M CLP)' },
    { value: 50000, label: 'Más de UF 50.000 (Trophy Asset / Ultra Lujo)' },
    { value: 0, label: 'Por definir con asesor patrimonial' },
  ];

  protected readonly sectores: Opcion<string>[] = [
    { value: 'Vitacura', label: 'Vitacura (Lo Curro / Santa María de Manquehue)' },
    { value: 'Lo Barnechea', label: 'Lo Barnechea (La Dehesa / El Arrayán)' },
    { value: 'Las Condes', label: 'Las Condes (San Damián / El Golf)' },
    { value: 'Costa', label: 'Costa Prime (Zapallar / Cachagua / Papudo)' },
    { value: 'Sur', label: 'Sur & Cordillera (Pucón / Llanquihue)' },
    { value: 'Otro', label: 'Otro enclave exclusivo' },
  ];

  protected readonly canales: Canal[] = [
    { value: 'telefono', label: 'Teléfono', icon: 'phone' },
    { value: 'email', label: 'Email', icon: 'mail' },
    { value: 'whatsapp', label: 'WhatsApp', icon: 'chat' },
  ];

  protected readonly horarios: string[] = [
    'Mañana (09:00 – 12:00 hrs)',
    'Mediodía (12:00 – 15:00 hrs)',
    'Tarde (15:00 – 18:30 hrs)',
    'A la brevedad posible',
  ];

  protected readonly pilares: Pilar[] = [
    {
      eyebrow: '01. Discreción total',
      title: 'Off-Market exclusivo',
      description: 'Acceso garantizado a propiedades que no se publican en portales abiertos, transadas exclusivamente entre coleccionistas e inversionistas calificados.',
    },
    {
      eyebrow: '02. Asesoría integral',
      title: 'Legal & tributario',
      description: 'Acompañamiento especializado en estructuras fiduciarias, estudios de títulos complejos y optimización tributaria bajo la normativa vigente chilena.',
    },
    {
      eyebrow: '03. Cobertura país',
      title: 'Enclaves estratégicos',
      description: 'Presencia directa con directores locales en el cono oriente de Santiago, el litoral de Zapallar y Cachagua, y el sur austral.',
    },
  ];

  protected readonly form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d[\d\s]{7,11}$/)]],
    mensaje: ['', Validators.required],
    tipoAccion: this.fb.control<TipoAccion>('Compra'),
    cantidad: [this.presupuestos[0].value],
    sector: [this.sectores[0].value],
    formaDeContacto: this.fb.control<FormaDeContacto>('telefono'),
    fecha: [this.fechaMinima],
    hora: [this.horarios[0]],
    acepta: [false, Validators.requiredTrue],
  });

  private canal = toSignal(this.form.controls.formaDeContacto.valueChanges, {
    initialValue: this.form.controls.formaDeContacto.value,
  });
  // Por email no se agenda una llamada, así que la fecha y hora no aplican
  protected readonly requiereHorario = computed(() => this.canal() !== 'email');

  protected readonly estado = signal<Estado>('idle');
  protected readonly folio = signal('');

  protected error(campo: 'nombre' | 'email' | 'telefono' | 'mensaje'): string | null {
    const control = this.form.controls[campo];
    if (!control.touched || !control.errors) {
      return null;
    }
    return MENSAJES_ERROR[Object.keys(control.errors)[0]] ?? 'Campo inválido';
  }

  protected enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { acepta, fecha, hora, telefono, ...datos } = this.form.getRawValue();
    const contacto: Contacto = {
      ...datos,
      telefono: `+56 ${telefono.trim()}`,
      ...(this.requiereHorario() && { fecha, hora }),
    };

    this.estado.set('enviando');
    this.contactoService.enviar(contacto).subscribe({
      next: ({ id }) => {
        this.folio.set(id.slice(-6).toUpperCase());
        this.estado.set('enviado');
        this.form.reset();
      },
      error: () => this.estado.set('error'),
    });
  }

  protected nuevaSolicitud(): void {
    this.estado.set('idle');
  }
}
