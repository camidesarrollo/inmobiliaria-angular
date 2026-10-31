export class Entrada {
    constructor(_id =  "", titulo = "", fecha: string, idUsuario = "") {
        this._id = _id;
        this.titulo = titulo,
        this.fecha = fecha;
        this.idUsuario = idUsuario;
    }
    _id: string;
    titulo :string;
    fecha: string;
    idUsuario: string
}
