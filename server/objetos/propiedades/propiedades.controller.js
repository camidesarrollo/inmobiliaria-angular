const PropiedadesDao = require('./propiedades.dao');
const propiedadesSchema = require('./propiedades.model');
exports.getPropiedades = async (req,res,next) =>{
    const propiedades = await PropiedadesDao.find();
    res.json(propiedades);
}
exports.createPropiedad = (req, res, next) => {
    const newPropiedad = {
        nombre: req.body.nombre,
        bano:req.body.bano, 
        pieza:req.body.pieza,
        metrosCuadrados: req.body.metrosCuadrados,
        ubicacion: req.body.ubicacion, 
        direccion:req.body.direccion,
        valor:req.body.valor,
        descripcion:req.body.descripcion, 
        recidencia:req.body.recidencia, 
        inmobiliaria:req.body.inmobiliaria,
        tipo:req.body.tipo,
        venta:req.body.venta, 
        urlPlano:req.body.urlPlano,
        urlPropiedad:req.body.urlPropiedad,
    };

    PropiedadesDao.create(newPropiedad, (err, propiedad) => {
        console.log(propiedad);
        const dataPropiedad = {
            nombre: newPropiedad.nombre,
            bano:newPropiedad.bano, 
            pieza:newPropiedad.pieza,
            metrosCuadrados: newPropiedad.metrosCuadrados,
            ubicacion: newPropiedad.ubicacion, 
            direccion:newPropiedad.direccion,
            valor:newPropiedad.valor,
            descripcion:newPropiedad.descripcion, 
            recidencia:newPropiedad.recidencia, 
            inmobiliaria:newPropiedad.inmobiliaria,
            tipo:newPropiedad.tipo,
            venta:newPropiedad.venta, 
            urlPlano:newPropiedad.urlPlano,
            urlPropiedad:newPropiedad.urlPropiedad,
        }
    });
    res.json({ status: "Propiedad created" });
}


exports.getPropiedad = async (req, res,next) =>{
    const { id } = req.params;
    const propiedad = await PropiedadesDao.findById(id);
    res.json(propiedad);
}

exports.editPropiedad = async(req, res,next) =>{
    const { id } = req.params;
     await PropiedadesDao.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Propiedad Updated" });
}

exports.deletePropiedad = async(req, res,next) =>{
    await PropiedadesDao.findByIdAndRemove(req.params.id);
    res.json({ status: "Propiedad Deleted" });
}
