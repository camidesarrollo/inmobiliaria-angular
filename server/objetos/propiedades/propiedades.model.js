const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const propiedadesSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    bano:{
        type: Number,
        required: true,
    }, 
    pieza:{
        type: Number,
        required: true,
    },
    metrosCuadrados: {
        type: String,
        required: true,
    },
    ubicacion:{
        type: String,
        required: true,
    }, 
    direccion:{
        type: String,
        required: true,
    },
    valor:{
        type: Number,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    }, 
    recidencia:{
        type: String,
        required: true,
    }, 
    inmobiliaria:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    venta:{
        type: String,
        required: true,
    }, 
    urlPlano:{
        type: String,
        required: true,
    },
    urlPropiedad:{
        type: String,
        required: true,
    },
})
module.exports = propiedadesSchema;
