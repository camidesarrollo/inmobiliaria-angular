'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const authRoutes = require('./objetos/auth/auth.routes');
const propiedadesRoutes = require('./objetos/propiedades/propiedades.routes');
const contactosRoutes = require('./objetos/contacto/contacto.router');

const DB = require('./config/db');
const router = express.Router();
// init DB
DB();
// Middlewares 

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
//Routes
app.use('/api', router);
authRoutes(router);
propiedadesRoutes(router);
contactosRoutes(router);

app.use(authRoutes);
app.use(propiedadesRoutes);
app.use(contactosRoutes);

// app.use(require('./objetos/auth/auth.routes'))




router.get('/', (req, res) => { 
  res.send('Hello from home');
});

module.exports = app;