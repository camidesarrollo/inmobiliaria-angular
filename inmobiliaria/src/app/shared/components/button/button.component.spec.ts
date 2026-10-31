import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

@Component({
  imports: [ButtonComponent],
  template: `
    <button appButton class="extra">Primario</button>
    <a appButton variant="secondary" size="sm" [loading]="true">Secundario</a>
  `,
})
class HostComponent {}

describe('ButtonComponent', () => {
  it('aplica las clases de la variante sin perder las propias', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const [button, link] = fixture.nativeElement.querySelectorAll('[appbutton]');

    expect(button.className).toContain('btn btn-primary');
    expect(button.className).toContain('extra');
    expect(link.className).toContain('btn-secondary btn-sm');
  });

  it('marca el estado de carga para lectores de pantalla', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a');

    expect(link.getAttribute('aria-busy')).toBe('true');
    expect(link.querySelector('app-loading')).not.toBeNull();
  });
});
