const express = require("express");
const archiveController = require("../controllers/archive");
const blockAccess = require("../middleware/block-access");
const router = express.Router();

// Archive an article
router.post("/", archiveController.archiveArticle);

// View all archived articles
router.get("/", archiveController.getAllArchivedArticles);

// Get an archived article
router.get("/:id", archiveController.getArchivedArticle);

module.exports = router;
