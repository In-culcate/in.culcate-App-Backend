// routers/article.js

const express = require("express");
const router = express.Router();
const {
  send_20_Short_Article,
  send_Short_Article_By_Id,
} = require("../controllers/Article/article_short");

const {
  send_long_Article_By_Id,
} = require("../controllers/Article/article_long");

router.get("/get_20", send_20_Short_Article);
router.get("/get_short_article/:id", send_Short_Article_By_Id);
router.get("/get_long_article/:id", send_long_Article_By_Id);

module.exports = router;
