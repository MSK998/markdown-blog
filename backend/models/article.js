const { Sequelize, DataTypes } = require("sequelize");
const slugify = require("slugify");
const sanitizeHtml = require("sanitize-html");
const marked = require("marked");

const markdownDb = new Sequelize(
  "postgres://markdown:sdvgvgF0ahpYsYaZSk@localhost:5432/markdown_blog",
  // Can be set to true to see the SQL statements that are being run
  { logging: false }
);

const Article = markdownDb.define("article", {
  title: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  markdown: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  slug: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sanitisedHTML: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Article.beforeValidate(async (article, options) => {
  if (article.title) {
    article.slug = await slugify(article.title, { lower: true, strict: true });
  }
  if (article.markdown) {
    article.sanitisedHTML = await sanitizeHtml(marked(article.markdown));
  }
});

Article.beforeUpdate(async (article, options) => {
  /*
  Sequelize's default behavior prohibits fields being changed
  if they have not been specified in the .update method call
  this means that if any values are changed in a hook, they
  will not be saved adding the exta fields with options.fields
  overrides this behavior
  */
  options.fields = [
    "title",
    "description",
    "markdown",
    "slug",
    "sanitisedHTML",
    "isArchived",
  ];
  if (article.markdown) {
    article.sanitisedHTML = await sanitizeHtml(marked(article.markdown));
  }
  if (article.title) {
    article.slug = await slugify(article.title, { lower: true, strict: true });
  }
});

(async () => {
  await Article.sync();
})();

module.exports = Article;
