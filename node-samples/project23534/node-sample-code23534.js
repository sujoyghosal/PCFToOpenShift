const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23534;
const EXT_SVCURL29606 = process.env.VCAP_URL29606 || 'https://somesvc29606.example.com/getData';
const DB_URL29606 = process.env.DB_URL29606 || 'https://somedb29606.example.com/getData';
const EXT_SVCURL21394 = process.env.VCAP_URL21394 || 'https://somesvc21394.example.com/getData';
const DB_URL21394 = process.env.DB_URL21394 || 'https://somedb21394.example.com/getData';
const EXT_SVCURL28790 = process.env.VCAP_URL28790 || 'https://somesvc28790.example.com/getData';
const DB_URL28790 = process.env.DB_URL28790 || 'https://somedb28790.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23534</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
