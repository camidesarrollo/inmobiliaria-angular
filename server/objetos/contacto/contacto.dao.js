const mongoose = require('mongoose');
const contactosSchema = require('./contacto.model');

statics = {
  create: function (data, cb) {
    const contacto = new this(data);
    contacto.save(propiedad);
  },
  get: function (query, cb) {
    this.find(query, cb);
  }
}

const contactoModel = mongoose.model('Contactos', contactosSchema);
module.exports = contactoModel;