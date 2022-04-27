const mongoose = require('mongoose');
const blogsShema = require('./blogs.model');

blogsShema.statics = {
  create: function (data, cb) {
    const blogs = new this(data);
    blogs.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
}

const BlogsModel = mongoose.model('Blogs', blogsShema);
module.exports = BlogsModel;