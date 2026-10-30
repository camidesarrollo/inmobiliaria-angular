const Propiedades = require('./propiedades.controller');
const verifyToken = require('../../middlewares/verify-token');
module.exports = (router) => {
  router.post("/propiedades", verifyToken, Propiedades.createPropiedad);
  router.get('/propiedades', Propiedades.getPropiedades);
  router.get("/propiedades/:id", Propiedades.getPropiedad);
  router.put("/propiedades/:id", verifyToken, Propiedades.editPropiedad);
  router.delete("/propiedades/:id", verifyToken, Propiedades.deletePropiedad);
}
