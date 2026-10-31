import { Propiedades } from '../../../domain/models/propiedades.model';
import { StatusTone } from '@shared/components/status-chip/status-chip.component';

// Lo que la tarjeta necesita mostrar, independiente de cómo venga la API
export interface PropertyCard {
  id: string;
  title: string;
  location?: string;
  image?: string;
  tag?: string;
  exclusive?: boolean;
  status?: { label: string; tone: StatusTone };
  priceUf?: number | null;
  priceClp?: number | null;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  area?: number | string;
}

export function toPropertyCard(propiedad: Propiedades): PropertyCard {
  return {
    id: propiedad._id,
    title: propiedad.nombre,
    location: propiedad.ubicacion || undefined,
    image: propiedad.urlPropiedad || undefined,
    tag: propiedad.venta || propiedad.tipo || undefined,
    priceClp: propiedad.valor || null,
    bedrooms: propiedad.pieza,
    bathrooms: propiedad.bano,
    area: propiedad.metrosCuadrados || undefined,
  };
}
