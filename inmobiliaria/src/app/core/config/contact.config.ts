// Datos de contacto de la empresa: se muestran en el footer, la página de contacto y los llamados a la acción.
// Reemplazar por los datos reales.
const ADDRESS = 'Av. Alonso de Córdova 3788, Of. 802, Vitacura, Santiago de Chile';

export const CONTACT_INFO = {
  brand: 'Inmobiliaria',
  tagline: 'Propiedades Exclusivas',
  office: 'Sede Vitacura',
  address: ADDRESS,
  phone: '+56 2 2940 8000',
  whatsapp: '+56 2 2940 8000',
  email: 'contacto@inmobiliaria-luxe.cl',
  whatsappUrl: 'https://wa.me/56229408000',
  mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
  // Mapa embebido de Google Maps (no requiere API key)
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`,
  schedule: [
    { days: 'Lunes a Viernes', hours: '09:00 – 19:00 hrs' },
    { days: 'Sábados', hours: 'Previa coordinación privada' },
  ],
  // { label: 'Instagram', url: 'https://…', icon: 'globe' }; vacío = no se muestran
  social: [] as { label: string; url: string; icon: 'chat' | 'video' | 'globe' }[],
};
