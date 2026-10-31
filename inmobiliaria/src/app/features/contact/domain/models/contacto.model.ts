export type TipoAccion = 'Compra' | 'Venta' | 'Inversión';
export type FormaDeContacto = 'telefono' | 'email' | 'whatsapp';

// Solicitud enviada desde la página de contacto (POST /api/contacto)
export interface Contacto {
  _id?: string;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  tipoAccion: TipoAccion;
  // Presupuesto estimado en UF (0 = por definir con el asesor)
  cantidad: number;
  sector: string;
  formaDeContacto: FormaDeContacto;
  // Solo cuando el contacto es por teléfono o WhatsApp
  fecha?: string;
  hora?: string;
}

export interface ContactoCreado {
  status: string;
  id: string;
}
