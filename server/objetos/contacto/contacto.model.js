const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    sector:{
        type: String,
    },
    formaDeContacto:{
        type: String,
        required: true,
    },
    // Solo se informan cuando el contacto es por teléfono o WhatsApp
    fecha:{
        type: String,
    },
    hora:{
        type: String,
    },
}, {
    timestamps: true
})
module.exports = ContactoSchema;

