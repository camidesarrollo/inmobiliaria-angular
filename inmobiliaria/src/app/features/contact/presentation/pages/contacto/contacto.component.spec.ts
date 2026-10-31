import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { API_ENDPOINTS } from '@core/config/api.config';
import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let fixture: ComponentFixture<ContactoComponent>;
  let el: HTMLElement;
  let httpTesting: HttpTestingController;

  const escribir = (selector: string, valor: string) => {
    const input = el.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
    input.value = valor;
    input.dispatchEvent(new Event('input'));
  };

  const completarFormulario = () => {
    escribir('[formControlName="nombre"]', 'Ana Pérez');
    escribir('[formControlName="email"]', 'ana@correo.cl');
    escribir('[formControlName="telefono"]', '9 8765 4321');
    escribir('[formControlName="mensaje"]', 'Busco casa con vista');
    el.querySelector<HTMLInputElement>('[formControlName="acepta"]')!.click();
  };

  const enviar = () => {
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    el = fixture.nativeElement;
    httpTesting = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => httpTesting.verify());

  it('no envía y muestra errores si el formulario está incompleto', () => {
    enviar();
    httpTesting.expectNone(API_ENDPOINTS.contacto);
    expect(el.textContent).toContain('Este campo es obligatorio');
    expect(el.textContent).toContain('Debe aceptar los términos para continuar');
  });

  it('envía la solicitud con prefijo telefónico y horario, y muestra el folio', () => {
    completarFormulario();
    enviar();

    const req = httpTesting.expectOne(API_ENDPOINTS.contacto);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toMatchObject({
      nombre: 'Ana Pérez',
      telefono: '+56 9 8765 4321',
      tipoAccion: 'Compra',
      cantidad: 20000,
      formaDeContacto: 'telefono',
    });
    expect(req.request.body.fecha).toBeTruthy();
    expect(req.request.body).not.toHaveProperty('acepta');

    req.flush({ status: 'Contacto created', id: '6ae4ab07931a6133740bba53' });
    fixture.detectChanges();
    expect(el.textContent).toContain('Folio de atención: 0BBA53');
  });

  it('no envía fecha ni hora cuando el canal es email', () => {
    completarFormulario();
    el.querySelectorAll<HTMLInputElement>('[formControlName="formaDeContacto"]')[1].click();
    fixture.detectChanges();
    enviar();

    const req = httpTesting.expectOne(API_ENDPOINTS.contacto);
    expect(req.request.body.formaDeContacto).toBe('email');
    expect(req.request.body).not.toHaveProperty('fecha');
    expect(req.request.body).not.toHaveProperty('hora');
    req.flush({ status: 'Contacto created', id: 'abc123def456' });
  });

  it('muestra un mensaje si el servidor falla', () => {
    completarFormulario();
    enviar();
    httpTesting.expectOne(API_ENDPOINTS.contacto).flush(null, { status: 500, statusText: 'Error' });
    fixture.detectChanges();
    expect(el.textContent).toContain('No pudimos enviar su solicitud');
  });
});
