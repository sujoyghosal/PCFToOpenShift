const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20406;
const EXT_SVCURL21382 = process.env.VCAP_URL21382 || 'https://somesvc21382.example.com/getData';
const DB_URL21382 = process.env.DB_URL21382 || 'https://somedb21382.example.com/getData';
const EXT_SVCURL29193 = process.env.VCAP_URL29193 || 'https://somesvc29193.example.com/getData';
const DB_URL29193 = process.env.DB_URL29193 || 'https://somedb29193.example.com/getData';
const EXT_SVCURL21833 = process.env.VCAP_URL21833 || 'https://somesvc21833.example.com/getData';
const DB_URL21833 = process.env.DB_URL21833 || 'https://somedb21833.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20406</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
