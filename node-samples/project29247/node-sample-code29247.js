const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29247;
const EXT_SVCURL24853 = process.env.VCAP_URL24853 || 'https://somesvc24853.example.com/getData';
const DB_URL24853 = process.env.DB_URL24853 || 'https://somedb24853.example.com/getData';
const EXT_SVCURL20522 = process.env.VCAP_URL20522 || 'https://somesvc20522.example.com/getData';
const DB_URL20522 = process.env.DB_URL20522 || 'https://somedb20522.example.com/getData';
const EXT_SVCURL4271 = process.env.VCAP_URL4271 || 'https://somesvc4271.example.com/getData';
const DB_URL4271 = process.env.DB_URL4271 || 'https://somedb4271.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29247</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));