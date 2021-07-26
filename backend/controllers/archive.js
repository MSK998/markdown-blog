const Article = require("../models/article");

exports.getAllArchivedArticles = async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = 5;
  const offset = limit * (page - 1);
  const { count, rows } = await Article.findAndCountAll({
    where: { isArchived: true },
    limit: limit,
    offset: offset,
  });
  if (count > 0) {
    res.status(200).json({
      archives: rows,
      pages: Math.ceil(count / limit),
    });
  } else {
    res.status(204).json({
      message: "No Archived Articles Found",
    });
  }
};

exports.getArchivedArticle = async (req, res, next) => {
  const archivedArticle = await Article.findOne({
    where: { slug: req.params.slug, isArchived: true },
  });
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
