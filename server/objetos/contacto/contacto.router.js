const Contacto = require('./contacto.controller');
module.exports = (router) => {
  router.post("/contacto",  Contacto.createContacto);
}
