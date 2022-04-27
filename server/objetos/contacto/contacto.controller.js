const ContactoDao = require('./contacto.dao');
const  contactosSchema = require ('./contacto.model');

exports.createContacto = (req, res, next) =>{
    const newContacto = {
        nombre:req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        mensaje:req.body.mensaje,
        tipoAccion:req.body.tipoAccion,
        cantidad:req.body.cantidad,
        formaDeContacto:req.body.formaDeContacto,
        fecha:req.body.fecha,
        hora: req.body.hora,
    };

    ContactoDao.create(newContacto, (err, contacto)=>{
    });
    res.json({ status: "Contacto created" });

}