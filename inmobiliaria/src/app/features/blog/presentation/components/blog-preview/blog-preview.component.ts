import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@shared/components/icon/icon.component';

export interface BlogPostPreview {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image: string;
  link: string;
}

// Artículo horizontal: imagen a la izquierda, metadatos y extracto a la derecha
@Component({
  selector: 'app-blog-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  host: { class: 'block' },
  template: `
    @let p = post();
    <article class="group relative flex flex-col items-center gap-space-md rounded-lg bg-white p-space-md shadow-sm
                    transition-all duration-300 hover:shadow-md sm:flex-row">
      <div class="h-44 w-full shrink-0 overflow-hidden rounded-md bg-surface-container sm:w-56">
        <img [src]="p.image" alt="" loading="lazy"
             class="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div class="flex h-full flex-col justify-between py-1">
        <p class="mb-space-xs flex items-center gap-space-xs text-body-sm text-on-surface-variant">
          <span>{{ p.date }}</span>
          <span aria-hidden="true">•</span>
          <span class="font-medium text-primary">{{ p.category }}</span>
        </p>
        <h3 class="mb-space-xs font-display text-headline-md leading-snug text-on-surface transition-colors group-hover:text-primary">
          <a [routerLink]="p.link" class="after:absolute after:inset-0">{{ p.title }}</a>
        </h3>
        <p class="mb-space-sm line-clamp-2 text-body-sm text-on-surface-variant">{{ p.excerpt }}</p>
        <p class="flex items-center gap-2 text-label-md text-on-surface-variant">
          <app-icon name="user" [size]="16" class="text-secondary" />
          Por {{ p.author }}
        </p>
      </div>
    </article>
  `,
})
export class BlogPreviewComponent {
  post = input.required<BlogPostPreview>();
}
