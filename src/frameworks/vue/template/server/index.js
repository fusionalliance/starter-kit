const express = require('express');

const app = express();
const http = require('http').Server(app);
const path = require('path');
const serveStatic = require('serve-static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
  PORT = 3000,
} = process.env;

app.use(serveStatic(path.join(__dirname, 'dist')));

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`); // eslint-disable-line no-console
});
