const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./public/images/" });

const imageController = require("../controllers/image");

const router = express.Router();

router.post("/upload", upload.array("images", 12), imageController.uploadImage);

//router.get("/:id");

module.exports = router;
