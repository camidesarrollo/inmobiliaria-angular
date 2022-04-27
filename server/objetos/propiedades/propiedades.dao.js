const mongoose = require('mongoose');
const propiedadesSchema = require('./propiedades.model');

propiedadesSchema.statics = {
  create: function (data, cb) {
    const propiedad = new this(data);
    propiedad.save(propiedad);
  },
  get: function (query, cb) {
    this.find(query, cb);
  }
}

const propiedadModel = mongoose.model('Propiedades', propiedadesSchema);
module.exports = propiedadModel;