const Blogs = require('./blogs.controller');
const verifyToken = require('../../middlewares/verify-token');
module.exports = (router) => {
    router.post("/Blogs", verifyToken, Blogs.createBlogs);
    router.get('/Blogs', Blogs.getBlogs);
    router.get("/Blogs/:id", Blogs.getBlog);
    router.put("/Blogs/:id", verifyToken, Blogs.editBlogs);
    router.delete("/Blogs/:id", verifyToken, Blogs.deleteBlogs);
  }
