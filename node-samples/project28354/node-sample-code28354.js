const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28354;
const EXT_SVCURL4981 = process.env.VCAP_URL4981 || 'https://somesvc4981.example.com/getData';
const DB_URL4981 = process.env.DB_URL4981 || 'https://somedb4981.example.com/getData';
const EXT_SVCURL27008 = process.env.VCAP_URL27008 || 'https://somesvc27008.example.com/getData';
const DB_URL27008 = process.env.DB_URL27008 || 'https://somedb27008.example.com/getData';
const EXT_SVCURL29751 = process.env.VCAP_URL29751 || 'https://somesvc29751.example.com/getData';
const DB_URL29751 = process.env.DB_URL29751 || 'https://somedb29751.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28354</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
