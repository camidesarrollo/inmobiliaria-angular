const mongoose = require('mongoose');
const contactosSchema = require('./contacto.model');

const contactoModel = mongoose.model('Contactos', contactosSchema);
module.exports = contactoModel;
