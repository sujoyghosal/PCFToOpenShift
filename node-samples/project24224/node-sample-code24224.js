const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24224;
const EXT_SVCURL24117 = process.env.VCAP_URL24117 || 'https://somesvc24117.example.com/getData';
const DB_URL24117 = process.env.DB_URL24117 || 'https://somedb24117.example.com/getData';
const EXT_SVCURL5672 = process.env.VCAP_URL5672 || 'https://somesvc5672.example.com/getData';
const DB_URL5672 = process.env.DB_URL5672 || 'https://somedb5672.example.com/getData';
const EXT_SVCURL26850 = process.env.VCAP_URL26850 || 'https://somesvc26850.example.com/getData';
const DB_URL26850 = process.env.DB_URL26850 || 'https://somedb26850.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24224</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
