const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5245;
const EXT_SVCURL27446 = process.env.VCAP_URL27446 || 'https://somesvc27446.example.com/getData';
const DB_URL27446 = process.env.DB_URL27446 || 'https://somedb27446.example.com/getData';
const EXT_SVCURL33346 = process.env.VCAP_URL33346 || 'https://somesvc33346.example.com/getData';
const DB_URL33346 = process.env.DB_URL33346 || 'https://somedb33346.example.com/getData';
const EXT_SVCURL4209 = process.env.VCAP_URL4209 || 'https://somesvc4209.example.com/getData';
const DB_URL4209 = process.env.DB_URL4209 || 'https://somedb4209.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5245</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));