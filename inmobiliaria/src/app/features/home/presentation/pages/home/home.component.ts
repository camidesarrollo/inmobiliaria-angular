import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { BlogPostPreview, BlogPreviewComponent } from '@features/blog/presentation/components/blog-preview/blog-preview.component';
import { FeaturedPropertiesComponent } from '@features/properties/presentation/components/featured-properties/featured-properties.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { Testimonial, TestimonialCardComponent } from '../../components/testimonial-card/testimonial-card.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SectionHeadingComponent, BlogPreviewComponent, FeaturedPropertiesComponent,
    CtaBannerComponent, HomeHeroComponent, TestimonialCardComponent, WhyUsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Contenido de ejemplo hasta que el blog y los testimonios vengan de la API
  protected readonly posts: BlogPostPreview[] = [
    {
      title: 'Tendencias de plusvalía y diseño en Vitacura',
      excerpt: 'Un análisis del impacto de las nuevas normativas de sustentabilidad y la creciente demanda de penthouses con jardines privados.',
      date: '12 marzo, 2026',
      category: 'Vitacura',
      author: 'Felipe Silva, economista jefe',
      image: 'assets/Imagenes/blog1.jpg',
      link: '/blog',
    },
    {
      title: 'Invertir en segunda vivienda: la guía de Zapallar y Cachagua',
      excerpt: 'Cómo los activos costeros de alto estándar han protegido el capital familiar con una plusvalía anual sostenida en UF.',
      date: '28 febrero, 2026',
      category: 'Costa central',
      author: 'Rosario Lyon, asesora senior costa',
      image: 'assets/Imagenes/blog2.jpg',
      link: '/blog',
    },
  ];

  protected readonly testimonial: Testimonial = {
    quote: 'El nivel de confidencialidad y atención personalizada superó todas nuestras expectativas. Encontraron exactamente la propiedad en Lo Barnechea que buscábamos para nuestra familia, en tiempo récord y con una negociación impecable.',
    name: 'Camila Edwards Larraín',
    role: 'Inversionista y directora ejecutiva',
    verifiedLabel: 'Comprador verificado en Lo Barnechea',
    rating: 5,
  };
}
