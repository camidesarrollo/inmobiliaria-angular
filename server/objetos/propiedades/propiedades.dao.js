const mongoose = require('mongoose');
const propiedadesSchema = require('./propiedades.model');

const propiedadModel = mongoose.model('Propiedades', propiedadesSchema);
module.exports = propiedadModel;
