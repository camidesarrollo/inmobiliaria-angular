const BlogsDao = require('./blogs.dao');

exports.getBlogs = async (req, res) => {
  const blogs = await BlogsDao.find();
  res.json(blogs);
};

exports.createBlogs = async (req, res) => {
  await BlogsDao.create({
    id_autor: req.body.id_autor,
    autor: req.body.autor,
    fecha: req.body.fecha,
    texto: req.body.texto,
  });
  res.json({ status: 'Blogs created' });
};

exports.getBlog = async (req, res) => {
  const blog = await BlogsDao.findById(req.params.id);
  if (!blog) return res.status(404).json({ status: 'Blogs not found' });
  res.json(blog);
};

exports.editBlogs = async (req, res) => {
  const blog = await BlogsDao.findByIdAndUpdate(req.params.id, { $set: req.body }, { returnDocument: 'after', runValidators: true });
  if (!blog) return res.status(404).json({ status: 'Blogs not found' });
  res.json({ status: 'Blogs Updated' });
};

exports.deleteBlogs = async (req, res) => {
  const blog = await BlogsDao.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ status: 'Blogs not found' });
  res.json({ status: 'Blogs Deleted' });
};
