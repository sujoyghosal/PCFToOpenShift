const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29335;
const EXT_SVCURL31095 = process.env.VCAP_URL31095 || 'https://somesvc31095.example.com/getData';
const DB_URL31095 = process.env.DB_URL31095 || 'https://somedb31095.example.com/getData';
const EXT_SVCURL8406 = process.env.VCAP_URL8406 || 'https://somesvc8406.example.com/getData';
const DB_URL8406 = process.env.DB_URL8406 || 'https://somedb8406.example.com/getData';
const EXT_SVCURL12063 = process.env.VCAP_URL12063 || 'https://somesvc12063.example.com/getData';
const DB_URL12063 = process.env.DB_URL12063 || 'https://somedb12063.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29335</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
