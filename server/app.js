'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./objetos/auth/auth.routes');
const propiedadesRoutes = require('./objetos/propiedades/propiedades.routes');
const contactosRoutes = require('./objetos/contacto/contacto.router');
const blogsRoutes = require('./objetos/blogs/blogs.router');
const DB = require('./config/db');

const app = express();
const router = express.Router();

// init DB
DB();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
authRoutes(router);
propiedadesRoutes(router);
contactosRoutes(router);
blogsRoutes(router);

router.get('/', (req, res) => {
  res.send('Hello from home');
});

// El frontend usa /login y /register en la raíz y el resto bajo /api
app.use('/api', router);
app.use(router);

// Express 5 envía aquí los errores de los controladores async
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app;
