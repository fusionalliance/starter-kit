const express = require('express');
const http = require('http');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const server = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
  PORT = 3000,
} = process.env;

app.use(serveStatic(path.join(__dirname, '../dist')));

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`); // eslint-disable-line no-console
});
