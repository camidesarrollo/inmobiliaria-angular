export class Propiedades {
    constructor(_id = "", nombre = "", bano = 0, pieza = 0, metrosCuadrados = "", ubicacion ="", direccion = "", valor = 0,  descripcion = "", recidencia = "", inmobiliaria = "", tipo = "", venta="", urlPlano="",urlPropiedad="") {
        this._id = _id;
        this.nombre = nombre,
        this.bano = bano,
        this.pieza = pieza,
        this.metrosCuadrados = metrosCuadrados
        this.ubicacion = ubicacion,
        this.direccion = direccion,
        this.valor = valor,
        this.descripcion = descripcion,
        this.recidencia = recidencia,
        this.inmobiliaria = inmobiliaria,
        this.tipo = tipo,
        this.venta = venta,
        this.urlPlano = urlPlano,
        this.urlPropiedad = urlPropiedad
    }
    _id: string;
    nombre: string;
    bano: number; 
    pieza: number;
    metrosCuadrados: string;
    ubicacion: string;
    direccion: string;
    valor: number;
    descripcion: string;
    recidencia: string;
    inmobiliaria: string;
    tipo: string;
    venta: string;
    urlPlano: string;
    urlPropiedad: string;
}

