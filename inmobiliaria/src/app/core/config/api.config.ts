import { environment } from '@env/environment';

export const API_URL = environment.apiUrl;

export const API_ENDPOINTS = {
  auth: API_URL,
  usuarios: `${API_URL}/api/usuarios`,
  propiedades: `${API_URL}/api/propiedades`,
  contacto: `${API_URL}/api/contacto`,
  entradas: `${API_URL}/api/entradas`,
};
