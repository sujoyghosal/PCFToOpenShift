const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26701;
const EXT_SVCURL5174 = process.env.VCAP_URL5174 || 'https://somesvc5174.example.com/getData';
const DB_URL5174 = process.env.DB_URL5174 || 'https://somedb5174.example.com/getData';
const EXT_SVCURL24390 = process.env.VCAP_URL24390 || 'https://somesvc24390.example.com/getData';
const DB_URL24390 = process.env.DB_URL24390 || 'https://somedb24390.example.com/getData';
const EXT_SVCURL9722 = process.env.VCAP_URL9722 || 'https://somesvc9722.example.com/getData';
const DB_URL9722 = process.env.DB_URL9722 || 'https://somedb9722.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26701</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
