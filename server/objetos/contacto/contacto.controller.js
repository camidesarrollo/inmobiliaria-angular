const ContactoDao = require('./contacto.dao');

exports.createContacto = async (req, res) => {
  await ContactoDao.create({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    mensaje: req.body.mensaje,
    tipoAccion: req.body.tipoAccion,
    cantidad: req.body.cantidad,
    formaDeContacto: req.body.formaDeContacto,
    fecha: req.body.fecha,
    hora: req.body.hora,
  });
  res.json({ status: 'Contacto created' });
};
