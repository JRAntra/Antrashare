const express = require("express");
const app = express();

require('./startup/db')();

const hostname = '127.0.0.1';
const port = process.env.PORT || 4231;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;