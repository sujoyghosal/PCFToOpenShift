const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25844;
const EXT_SVCURL16458 = process.env.VCAP_URL16458 || 'https://somesvc16458.example.com/getData';
const DB_URL16458 = process.env.DB_URL16458 || 'https://somedb16458.example.com/getData';
const EXT_SVCURL23933 = process.env.VCAP_URL23933 || 'https://somesvc23933.example.com/getData';
const DB_URL23933 = process.env.DB_URL23933 || 'https://somedb23933.example.com/getData';
const EXT_SVCURL21688 = process.env.VCAP_URL21688 || 'https://somesvc21688.example.com/getData';
const DB_URL21688 = process.env.DB_URL21688 || 'https://somedb21688.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25844</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
