import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureCardComponent } from '@shared/components/feature-card/feature-card.component';
import { IconName } from '@shared/components/icon/icon.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';

interface Pillar {
  icon: IconName;
  iconClass: string;
  accentClass: string;
  title: string;
  description: string;
  cta: string;
}

@Component({
  selector: 'app-why-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureCardComponent, SectionHeadingComponent],
  host: { class: 'block' },
  template: `
    <section class="bg-surface py-space-3xl">
      <div class="container-luxe">
        <app-section-heading
          class="mx-auto mb-space-2xl max-w-2xl"
          align="center"
          eyebrow="Excelencia & confianza"
          title="Por qué elegirnos"
          subtitle="Combinamos un conocimiento profundo del mercado inmobiliario chileno con estándares de discreción y asesoría legal personalizada." />

        <div class="grid grid-cols-1 gap-gutter md:grid-cols-3 lg:gap-space-xl">
          @for (p of pillars; track p.title) {
            <app-feature-card [icon]="p.icon" [iconClass]="p.iconClass" [accentClass]="p.accentClass"
                              [title]="p.title" [description]="p.description" [footer]="p.cta" />
          }
        </div>
      </div>
    </section>
  `,
})
export class WhyUsComponent {
  protected readonly pillars: Pillar[] = [
    {
      icon: 'shield',
      iconClass: 'bg-surface-container text-primary',
      accentClass: 'text-primary',
      title: 'Seguridad',
      description: 'Asesoría jurídica y financiera para transacciones de alto patrimonio, con total confidencialidad en cada escritura y auditoría exhaustiva de títulos.',
      cta: 'Due diligence privado',
    },
    {
      icon: 'trending-up',
      iconClass: 'bg-secondary-fixed text-on-secondary-fixed',
      accentClass: 'text-secondary',
      title: 'El mejor precio',
      description: 'Valoración experta de mercado para maximizar la plusvalía y el retorno de propiedades exclusivas, respaldada por datos transaccionales de la zona oriente.',
      cta: 'Análisis patrimonial',
    },
    {
      icon: 'clock',
      iconClass: 'bg-surface-container text-primary-container',
      accentClass: 'text-primary',
      title: 'A tiempo',
      description: 'Ejecutivos dedicados para visitas privadas y una escrituración oportuna y sin fricciones, adaptada a tu itinerario familiar o corporativo.',
      cta: 'Concierge inmobiliario',
    },
  ];
}
