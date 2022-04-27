const Blogs = require('./blogs.controller');
module.exports = (router) => {
    router.post("/Blogs",  Blogs.createBlogs);
    router.get('/Blogs',  Blogs.getBlogs);
    router.get("/Blogs/:id",  Blogs.getBlog);
    router.put("/Blogs/:id",  Blogs.editBlogs);
    router.delete("/Blogs/:id",  Blogs.deleteBlogs);
  }