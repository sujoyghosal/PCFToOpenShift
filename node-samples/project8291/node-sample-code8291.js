const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8291;
const EXT_SVCURL4749 = process.env.VCAP_URL4749 || 'https://somesvc4749.example.com/getData';
const DB_URL4749 = process.env.DB_URL4749 || 'https://somedb4749.example.com/getData';
const EXT_SVCURL5198 = process.env.VCAP_URL5198 || 'https://somesvc5198.example.com/getData';
const DB_URL5198 = process.env.DB_URL5198 || 'https://somedb5198.example.com/getData';
const EXT_SVCURL4819 = process.env.VCAP_URL4819 || 'https://somesvc4819.example.com/getData';
const DB_URL4819 = process.env.DB_URL4819 || 'https://somedb4819.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8291</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));