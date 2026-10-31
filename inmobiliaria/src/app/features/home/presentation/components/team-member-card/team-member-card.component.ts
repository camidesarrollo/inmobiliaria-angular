import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { IconComponent } from '@shared/components/icon/icon.component';

export interface TeamMember {
  name: string;
  position: string;
  role: string;
  bio: string;
  email?: string;
  photo?: string;
}

@Component({
  selector: 'app-team-member-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, IconComponent],
  host: { class: 'block' },
  template: `
    @let m = member();
    <article class="group h-full overflow-hidden rounded-md bg-white shadow-sm">
      <div class="relative aspect-3/4 overflow-hidden bg-surface-container">
        @if (m.photo) {
          <img [src]="m.photo" [alt]="m.name" loading="lazy"
               class="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
        } @else {
          <!-- Sin foto: iniciales sobre fondo neutro -->
          <span class="grid size-full place-items-center font-display text-display-hero text-outline-variant" aria-hidden="true">
            {{ initials() }}
          </span>
        }
        <app-badge variant="dark" class="absolute bottom-space-xs left-space-xs">{{ m.role }}</app-badge>
      </div>
      <div class="flex flex-col p-space-lg">
        <h3 class="font-display text-headline-sm text-on-surface">{{ m.name }}</h3>
        <p class="mt-0.5 text-label-md text-secondary">{{ m.position }}</p>
        <p class="mt-space-sm text-body-sm leading-relaxed text-on-surface-variant">{{ m.bio }}</p>
        @if (m.email) {
          <a [href]="'mailto:' + m.email"
             class="mt-space-md flex items-center gap-space-xs break-all pt-space-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary">
            <app-icon name="mail" [size]="16" /> {{ m.email }}
          </a>
        }
      </div>
    </article>
  `,
})
export class TeamMemberCardComponent {
  member = input.required<TeamMember>();

  protected initials = computed(() =>
    this.member().name.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase(),
  );
}
