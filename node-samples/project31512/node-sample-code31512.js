const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 31512;
const EXT_SVCURL27803 = process.env.VCAP_URL27803 || 'https://somesvc27803.example.com/getData';
const DB_URL27803 = process.env.DB_URL27803 || 'https://somedb27803.example.com/getData';
const EXT_SVCURL24096 = process.env.VCAP_URL24096 || 'https://somesvc24096.example.com/getData';
const DB_URL24096 = process.env.DB_URL24096 || 'https://somedb24096.example.com/getData';
const EXT_SVCURL16838 = process.env.VCAP_URL16838 || 'https://somesvc16838.example.com/getData';
const DB_URL16838 = process.env.DB_URL16838 || 'https://somedb16838.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #31512</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));