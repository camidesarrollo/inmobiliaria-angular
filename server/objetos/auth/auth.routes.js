const Users = require('./auth.controller');
const verifyToken = require('../../middlewares/verify-token');
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.get('/usuarios', verifyToken, Users.getUsuarios);
  router.put('/usuarios/:id', verifyToken, Users.editUser);
  router.delete('/usuarios/:id', verifyToken, Users.deleteUser);
};
