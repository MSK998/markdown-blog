const Article = require("../models/article");

exports.getAllArchivedArticles = async (req, res, next) => {
  const archivedArticles = await Article.findAll({
    where: { isArchived: true },
  });
  if (archivedArticles.length) {
    res.status(200).json(archivedArticles);
  } else {
    res.status(404).json({
      message: "No Archived Articles Found",
    });
  }
};

exports.getArchivedArticle = async (req, res, next) => {
  const archivedArticle = await Article.findByPk(req.params.id);
  if (archivedArticle) {
    res.status(200).json(archivedArticle);
  } else {
    res.status(404).json({
      message: `No archived articles with id: ${req.params.id}`,
    });
  }
};

/*
archiveArticle will archive and unarchive the article that has been
set in the query params
Example:
localhost:3000/article?id=1
will archive/unarchive based on its current flag
*/
exports.archiveArticle = async (req, res, next) => {
  const article = await Article.findOne({ where: { id: req.query.id } });
  if (article) {
    const archivedArticle = await article.update({
      isArchived: !article.isArchived,
    });

    res.status(201).json({
      message: `${
        archivedArticle.isArchived ? "Archived" : "Unarchived"
      } article with id: ${archivedArticle.id}`,
    });
  } else {
    res.status(404).json({
      message: `No article exists with id: ${req.query.id}`,
    });
  }
};
