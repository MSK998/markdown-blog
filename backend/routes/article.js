const express = require("express");
const articleController = require("../controllers/article");
const blockAccess = require("../middleware/block-access");
const router = express.Router();

// Post a new article
router.post("/new", articleController.createArticle);

// Get all article
router.get("/articles", articleController.getAllArticles);

// Get a article
router.get("/articles/:slug", articleController.getArticleBySlug);

// Edit a article
router.put("/articles/:id", articleController.editArticle);

// Delete an article
router.delete("/articles/:id", articleController.deleteArticle);

module.exports = router;
