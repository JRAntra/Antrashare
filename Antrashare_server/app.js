const express = require("express");
const app = express();

require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/routes')(app);

const hostname = 'localhost';
const port = process.env.PORT || 4231;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;