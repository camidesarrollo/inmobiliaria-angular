import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BadgeComponent } from '@shared/components/badge/badge.component';
import { BreadcrumbComponent, BreadcrumbItem } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatureCardComponent } from '@shared/components/feature-card/feature-card.component';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';
import { ImageTileComponent } from '@shared/components/image-tile/image-tile.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { StatCardComponent, StatTone } from '@shared/components/stat-card/stat-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { StoryChapterComponent } from '../../components/story-chapter/story-chapter.component';
import { TeamMember, TeamMemberCardComponent } from '../../components/team-member-card/team-member-card.component';

interface Stat {
  icon: IconName;
  tone: StatTone;
  tag: string;
  value: string;
  prefix?: string;
  suffix: string;
  suffixStyle?: 'accent' | 'unit';
  title: string;
  description: string;
}

interface Pillar {
  icon: IconName;
  iconClass: string;
  accentClass: string;
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
}

@Component({
  selector: 'app-nosotros',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nosotros.component.html',
  imports: [
    BadgeComponent, BreadcrumbComponent, FeatureCardComponent, IconComponent, ImageTileComponent,
    SectionHeadingComponent, StatCardComponent, CtaBannerComponent, StoryChapterComponent, TeamMemberCardComponent,
  ],
})
export class NosotrosComponent {
  protected readonly breadcrumb: BreadcrumbItem[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Nosotros', link: '/nosotros' },
    { label: 'Nuestra historia y visión' },
  ];

  protected readonly stats: Stat[] = [
    {
      icon: 'scroll', tone: 'secondary', tag: 'Desde 2001', value: '25', suffix: '+',
      title: 'Años de trayectoria',
      description: 'Liderazgo ininterrumpido en el corretaje y asesoría patrimonial de alta gama en Chile.',
    },
    {
      icon: 'area', tone: 'primary', tag: 'Superficie', value: '1.8M', suffix: '+',
      title: 'm² gestionados',
      description: 'Comercialización exclusiva de residencias singulares, paños urbanos y fincas cordilleranas.',
    },
    {
      icon: 'globe', tone: 'secondary', tag: 'Alianza Pacífico', value: '3', suffix: 'Sedes', suffixStyle: 'unit',
      title: 'Países de presencia',
      description: 'Red articulada entre Santiago, Lima y Bogotá para clientes con inversiones multijurisdiccionales.',
    },
    {
      icon: 'landmark', tone: 'primary', tag: 'Confidencial', prefix: '$', value: '2.4B', suffix: '+',
      title: 'USD asesorados',
      description: 'Volumen transaccional histórico bajo estrictos acuerdos de confidencialidad.',
    },
  ];

  protected readonly locations = [
    { image: 'assets/Imagenes/destacada.jpg', label: 'San Damián • Santiago' },
    { image: 'assets/Imagenes/destacada2.jpg', label: 'Bravamar • Zapallar' },
    { image: 'assets/Imagenes/destacada3.jpg', label: 'San Isidro • Lima' },
  ];

  protected readonly pillars: Pillar[] = [
    {
      icon: 'gavel', iconClass: 'bg-surface-container text-primary', accentClass: 'text-primary',
      eyebrow: 'Pilar I', title: 'Seguridad jurídica',
      description: 'Asesoría jurídica y financiera blindada para transacciones de alto patrimonio. Cada mandato se ejecuta con un riguroso due diligence notarial de 30 años, saneamiento de títulos, estructuras fiduciarias y acuerdos de total confidencialidad en cada escritura.',
      footer: 'Blindaje notarial integral',
    },
    {
      icon: 'trending-up', iconClass: 'bg-surface-container text-secondary', accentClass: 'text-secondary',
      eyebrow: 'Pilar II', title: 'El mejor precio',
      description: "Tasación econométrica de alta precisión combinada con conocimiento profundo del micromercado 'off-market'. Maximizamos plusvalía y retorno para vendedores mientras aseguramos precios justos y racionales para inversores antes de la exposición pública.",
      footer: 'Algoritmos de tasación comparativa',
    },
    {
      icon: 'clock', iconClass: 'bg-surface-container text-primary', accentClass: 'text-primary',
      eyebrow: 'Pilar III', title: 'A tiempo y sin fricción',
      description: 'Gestión ágil respaldada por ejecutivos dedicados 24/7. Coordinamos visitas privadas ultraseguras, aprobaciones bancarias exprés y cierre de promesas de compraventa en plazos récord, garantizando serenidad absoluta durante todo el proceso.',
      footer: 'Ejecución sincronizada sin demoras',
    },
  ];

  // Sin fotos locales: la tarjeta muestra iniciales. Agregar `photo: 'assets/…'` cuando existan.
  protected readonly team: TeamMember[] = [
    {
      name: 'Gonzalo Errázuriz V.', position: 'Director ejecutivo & fundador', role: 'Socio principal',
      bio: '25 años liderando transacciones patrimoniales en Lo Barnechea y Vitacura. Abogado UC con posgrado en Finanzas.',
      email: 'g.errazuriz@inmobiliaria-luxe.cl',
    },
    {
      name: 'Matilde Larraín C.', position: 'Curaduría arquitectónica & diseño', role: 'Socia directora',
      bio: 'Arquitecta UCH, especialista en conservación de residencias históricas y paños costeros en Zapallar y Cachagua.',
      email: 'm.larrain@inmobiliaria-luxe.cl',
    },
    {
      name: 'Felipe Montes Matte', position: 'Expansión Alianza del Pacífico', role: 'Director regional',
      bio: 'Ex banquero de inversión internacional. Dirige las operaciones transfronterizas entre Santiago, Lima y Bogotá.',
      email: 'f.montes@inmobiliaria-luxe.cl',
    },
    {
      name: 'Camila Undurraga R.', position: 'Directora de asuntos notariales', role: 'Legal & compliance',
      bio: 'Lidera los equipos de due diligence notarial y regularización predial. Especialista en derecho registral y tributario.',
      email: 'c.undurraga@inmobiliaria-luxe.cl',
    },
  ];

  protected readonly trustSeals: { icon: IconName; label: string }[] = [
    { icon: 'lock', label: 'Protocolo de confidencialidad' },
    { icon: 'shield', label: 'Miembro CChC & ACOP Chile' },
    { icon: 'headset', label: 'Atención privada 24/7' },
  ];
}
