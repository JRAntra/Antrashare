const express = require('express');
const router = express.Router();

const {News, validate} = require('../models/news');

router.get("/", async (req, res) => {
  const news = await News.find().sort();
  res.send(news);
});

module.exports = router;