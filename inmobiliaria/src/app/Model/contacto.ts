export class Contacto {
    contructor(_id = "", nombre= "", email = "", telefono = "", mensaje = "", tipoAccion = "", cantidad = 0, formaDeContacto = "", fecha = "", hora  = "" ){
        this._id = _id,
        this.nombre = nombre,
        this.email = email,
        this.telefono = telefono,
        this.mensaje = mensaje,
        this.tipoAccion = tipoAccion,
        this.cantidad = cantidad, 
        this.formaDeContacto = formaDeContacto,
        this.fecha = fecha, 
        this.hora =  hora
    }
    _id:string;
    nombre:string;
    email:string;
    telefono:string;
    mensaje:string;
    tipoAccion:string;
    cantidad:number;
    formaDeContacto:string;
    fecha:string;
    hora: string;
}
