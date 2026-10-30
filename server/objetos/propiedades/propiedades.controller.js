const PropiedadesDao = require('./propiedades.dao');

exports.getPropiedades = async (req, res) => {
  const propiedades = await PropiedadesDao.find();
  res.json(propiedades);
};

exports.createPropiedad = async (req, res) => {
  await PropiedadesDao.create({
    nombre: req.body.nombre,
    bano: req.body.bano,
    pieza: req.body.pieza,
    metrosCuadrados: req.body.metrosCuadrados,
    ubicacion: req.body.ubicacion,
    direccion: req.body.direccion,
    valor: req.body.valor,
    descripcion: req.body.descripcion,
    recidencia: req.body.recidencia,
    inmobiliaria: req.body.inmobiliaria,
    tipo: req.body.tipo,
    venta: req.body.venta,
    urlPlano: req.body.urlPlano,
    urlPropiedad: req.body.urlPropiedad,
  });
  res.json({ status: 'Propiedad created' });
};

exports.getPropiedad = async (req, res) => {
  const propiedad = await PropiedadesDao.findById(req.params.id);
  if (!propiedad) return res.status(404).json({ status: 'Propiedad not found' });
  res.json(propiedad);
};

exports.editPropiedad = async (req, res) => {
  const propiedad = await PropiedadesDao.findByIdAndUpdate(req.params.id, { $set: req.body }, { returnDocument: 'after', runValidators: true });
  if (!propiedad) return res.status(404).json({ status: 'Propiedad not found' });
  res.json({ status: 'Propiedad Updated' });
};

exports.deletePropiedad = async (req, res) => {
  const propiedad = await PropiedadesDao.findByIdAndDelete(req.params.id);
  if (!propiedad) return res.status(404).json({ status: 'Propiedad not found' });
  res.json({ status: 'Propiedad Deleted' });
};
