const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10324;
const EXT_SVCURL5456 = process.env.VCAP_URL5456 || 'https://somesvc5456.example.com/getData';
const DB_URL5456 = process.env.DB_URL5456 || 'https://somedb5456.example.com/getData';
const EXT_SVCURL30266 = process.env.VCAP_URL30266 || 'https://somesvc30266.example.com/getData';
const DB_URL30266 = process.env.DB_URL30266 || 'https://somedb30266.example.com/getData';
const EXT_SVCURL12824 = process.env.VCAP_URL12824 || 'https://somesvc12824.example.com/getData';
const DB_URL12824 = process.env.DB_URL12824 || 'https://somedb12824.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10324</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
