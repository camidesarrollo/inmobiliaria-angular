const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const blogsShema = new Schema({
    id_autor: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: String,
        required: true,
        trim: true
    },
    texto: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = blogsShema;