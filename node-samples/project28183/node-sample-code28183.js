const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28183;
const EXT_SVCURL4436 = process.env.VCAP_URL4436 || 'https://somesvc4436.example.com/getData';
const DB_URL4436 = process.env.DB_URL4436 || 'https://somedb4436.example.com/getData';
const EXT_SVCURL11698 = process.env.VCAP_URL11698 || 'https://somesvc11698.example.com/getData';
const DB_URL11698 = process.env.DB_URL11698 || 'https://somedb11698.example.com/getData';
const EXT_SVCURL27467 = process.env.VCAP_URL27467 || 'https://somesvc27467.example.com/getData';
const DB_URL27467 = process.env.DB_URL27467 || 'https://somedb27467.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28183</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
