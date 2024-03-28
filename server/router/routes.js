const express = require("express");
const { getAllPosts, getPostById ,postByCategory, postByAuthorId, addPost} = require("../controllers/post");

const router = express.Router();

router.get("/" , getAllPosts)
router.get("/post/:id" , getPostById)
router.get("/category/:categoryName", postByCategory);
router.get("/post/author/:authorId",postByAuthorId);
router.post("/" , addPost);


module.exports = router;