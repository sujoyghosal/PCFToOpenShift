const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36917;
const EXT_SVCURL13622 = process.env.VCAP_URL13622 || 'https://somesvc13622.example.com/getData';
const DB_URL13622 = process.env.DB_URL13622 || 'https://somedb13622.example.com/getData';
const EXT_SVCURL9545 = process.env.VCAP_URL9545 || 'https://somesvc9545.example.com/getData';
const DB_URL9545 = process.env.DB_URL9545 || 'https://somedb9545.example.com/getData';
const EXT_SVCURL27419 = process.env.VCAP_URL27419 || 'https://somesvc27419.example.com/getData';
const DB_URL27419 = process.env.DB_URL27419 || 'https://somedb27419.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36917</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
