const express = require('express');
const cors = require('cors');

const news = require('../routes/news');
const login = require('../routes/login');
const users = require('../routes/users');

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  // models router
  app.use('/api/login', login);
  app.use('/api/news', news);
  app.use('/api/users', users);
}