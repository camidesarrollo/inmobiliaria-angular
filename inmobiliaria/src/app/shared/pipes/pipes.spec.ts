import { ClpPipe } from './clp.pipe';
import { UfPipe } from './uf.pipe';

describe('UfPipe', () => {
  const pipe = new UfPipe();

  it('formatea con separador de miles chileno', () => {
    expect(pipe.transform(24500)).toBe('UF 24.500');
  });

  it('mantiene hasta dos decimales', () => {
    expect(pipe.transform(1234.567)).toBe('UF 1.234,57');
  });

  it('devuelve vacío sin valor', () => {
    expect(pipe.transform(null)).toBe('');
  });
});

describe('ClpPipe', () => {
  const pipe = new ClpPipe();

  it('formatea pesos sin decimales', () => {
    expect(pipe.transform(915000000)).toBe('$915.000.000');
  });

  it('devuelve vacío sin valor', () => {
    expect(pipe.transform(undefined)).toBe('');
  });
});
