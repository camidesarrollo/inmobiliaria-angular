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
    nombre: String;
    bano: Number; 
    pieza: Number;
    metrosCuadrados: String;
    ubicacion: String;
    direccion: String;
    valor: Number;
    descripcion:String;
    recidencia: String;
    inmobiliaria: String;
    tipo: String;
    venta: String;
    urlPlano: String;
    urlPropiedad: String;
}

