const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const ContactoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    telefono:{
        type: String,
        required: true,
    },
    mensaje:{
        type: String,
        required: true,
    },
    tipoAccion:{
        type: String,
        required: true,
    },
    cantidad:{
        type:Number,
        required: true,
    },
    formaDeContacto:{
        type: String,
        required: true,
    },
    fecha:{
        type: String,
        required: true,
    },
    hora:{
        type: String,
        required: true,
    },
})
module.exports = ContactoSchema;

