const express = require('express');
const cors = require('cors');

const news = require('../routes/news');

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  // models router
  app.use('/api/news', news);
}