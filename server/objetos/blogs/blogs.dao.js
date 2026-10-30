const mongoose = require('mongoose');
const blogsShema = require('./blogs.model');

const BlogsModel = mongoose.model('Blogs', blogsShema);
module.exports = BlogsModel;
