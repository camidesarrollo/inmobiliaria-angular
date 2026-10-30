# Server

API REST en Express 5 + Mongoose 9. Requiere Node.js 22.9+ y MongoDB.

```bash
npm install
cp .env.example .env   # define MONGODB_URI y JWT_SECRET (obligatorio)
npm run dev            # recarga automática con node --watch
```

Para generar una clave segura para `JWT_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Las rutas de escritura (y `/api/usuarios`) requieren el header `Authorization: Bearer <token>`.
