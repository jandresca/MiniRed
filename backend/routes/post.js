const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth");
const validateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, validateUser, PostController.saveTask);

router.get("/listPost", Auth, validateUser, PostController.listPost);

module.exports = router;