const express = require("express");
const { getAllPosts, getPostById ,postByCategory} = require("../controllers/post");

const router = express.Router();

router.get("/" , getAllPosts)
router.get("/post/:id" , getPostById)
router.get("/category/:categoryName", postByCategory);


module.exports = router;