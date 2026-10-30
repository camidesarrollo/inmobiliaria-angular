const mongoose = require('mongoose');
const authSchema = require('./auth.model');

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;
