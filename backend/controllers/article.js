const Article = require("../models/article");

exports.getAllArticles = async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = 3;
  const offset = limit * (page - 1);
  const { count, rows } = await Article.findAndCountAll({
    where: { isArchived: false },
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: offset,
  });
  // console.log(rows, count);
  if (count > 0) {
    res.status(200).json({
      articles: rows,
      rows: Math.ceil(count/limit),
    });
  } else {
    res.status(404).json({
      message: "No Articles Found",
    });
  }
};

exports.getArticleBySlug = async (req, res, next) => {
  const article = await Article.findOne({ where: { slug: req.params.slug } });
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({
      message: `No article with title: ${req.params.slug}`,
    });
  }
};

exports.createArticle = async (req, res, next) => {
  if (
    !req.body.title ||
    req.body.title.length < 1 ||
    !req.body.markdown ||
    req.body.markdown.length < 1
  ) {
    res
      .status(400)
      .json({ message: "One or more required fields have not been filled" });
  } else if (req.body.title.length > 60 || req.body.description.length > 200) {
    res
      .status(400)
      .json({ message: "One or more required fields exceeds the limits set" });
  } else {
    const article = await Article.create({
      title: req.body.title,
      description: req.body.description ? req.body.description : null,
      markdown: req.body.markdown,
    });

    if (article) {
      res.status(201).json(article);
    } else {
      res.status(500).json({
        message: "An unknown error occured",
      });
    }
  }
};

exports.editArticle = async (req, res, next) => {
  const article = await Article.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (article) {
    try {
      const updatedArticle = await article.update({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
      });

      if (updatedArticle) {
        res.status(201).json(updatedArticle);
      } else {
        res.status(400).json({
          message: "Malformed Request - Could not process",
        });
      }
    } catch {
      res.status(400).json({
        message: "Malformed Request - Could not process",
      });
    }
  } else {
    res.status(400).json({
      message: "Malformed Request - Could not process",
    });
  }
};

exports.deleteArticle = async (req, res, next) => {
  const deletedAtricle = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (deletedAtricle > 0) {
    res.status(200).json({
      message: "Deleted",
    });
  } else {
    res.status(400).json({
      message: `No article exists with id: ${req.params.id}`,
    });
  }
};
