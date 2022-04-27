const BlogsDao = require('./blogs.dao');
const blogsShema = require('./blogs.model');
exports.getBlogs = async (req,res,next) =>{
    const Blogs = await BlogsDao.find();
    res.json(Blogs);
}
exports.createBlogs = (req, res, next) => {
    const newBlogs = {
        id_autor: req.body.id_autor,
        autor: req.body.autor,
        fecha: req.body.fecha,
        texto: req.body.texto,
    };

    PropiedadesDao.create(newBlogs, (err, blogs) => {
        console.log(blogs);
        const dataBlogs = {
            id_autor: newBlogs.id_autor,
            autor:newBlogs.autor, 
            fecha:newBlogs.fecha,
            texto: newBlogs.texto
        }
    });
    res.json({ status: "Blogs created" });
}
exports.getBlog = async (req, res,next) =>{
    const { id } = req.params;
    const Blogs = await BlogsDao.findById(id);
    res.json(Blogs);
}
exports.editBlogs = async(req, res,next) =>{
    const { id } = req.params;
     await BlogsDao.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Blogs Updated" });
}

exports.deleteBlogs = async(req, res,next) =>{
    await BlogsDao.findByIdAndRemove(req.params.id);
    res.json({ status: "Blogs Deleted" });
}

