if (!process.env.JWT_SECRET) {
  throw new Error('Falta la variable de entorno JWT_SECRET. Copia .env.example a .env y define una clave segura.');
}

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.MONGODB_URI || 'mongodb://localhost/inmobiliaria',
  JWT_SECRET: process.env.JWT_SECRET
};
