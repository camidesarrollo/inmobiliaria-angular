const Propiedades = require('./propiedades.controller');
module.exports = (router) => {
  router.post("/propiedades",  Propiedades.createPropiedad);
  router.get('/propiedades',  Propiedades.getPropiedades);
  router.get("/propiedades/:id",  Propiedades.getPropiedad);
  router.put("/propiedades/:id",  Propiedades.editPropiedad);
  router.delete("/propiedades/:id",  Propiedades.deletePropiedad);
}
