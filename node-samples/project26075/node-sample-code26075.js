const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26075;
const EXT_SVCURL26977 = process.env.VCAP_URL26977 || 'https://somesvc26977.example.com/getData';
const DB_URL26977 = process.env.DB_URL26977 || 'https://somedb26977.example.com/getData';
const EXT_SVCURL30962 = process.env.VCAP_URL30962 || 'https://somesvc30962.example.com/getData';
const DB_URL30962 = process.env.DB_URL30962 || 'https://somedb30962.example.com/getData';
const EXT_SVCURL8553 = process.env.VCAP_URL8553 || 'https://somesvc8553.example.com/getData';
const DB_URL8553 = process.env.DB_URL8553 || 'https://somedb8553.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26075</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));