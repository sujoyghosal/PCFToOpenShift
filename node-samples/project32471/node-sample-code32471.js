const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32471;
const EXT_SVCURL9085 = process.env.VCAP_URL9085 || 'https://somesvc9085.example.com/getData';
const DB_URL9085 = process.env.DB_URL9085 || 'https://somedb9085.example.com/getData';
const EXT_SVCURL12118 = process.env.VCAP_URL12118 || 'https://somesvc12118.example.com/getData';
const DB_URL12118 = process.env.DB_URL12118 || 'https://somedb12118.example.com/getData';
const EXT_SVCURL20765 = process.env.VCAP_URL20765 || 'https://somesvc20765.example.com/getData';
const DB_URL20765 = process.env.DB_URL20765 || 'https://somedb20765.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32471</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));