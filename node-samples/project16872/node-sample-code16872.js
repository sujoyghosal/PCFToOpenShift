const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16872;
const EXT_SVCURL11226 = process.env.VCAP_URL11226 || 'https://somesvc11226.example.com/getData';
const DB_URL11226 = process.env.DB_URL11226 || 'https://somedb11226.example.com/getData';
const EXT_SVCURL13470 = process.env.VCAP_URL13470 || 'https://somesvc13470.example.com/getData';
const DB_URL13470 = process.env.DB_URL13470 || 'https://somedb13470.example.com/getData';
const EXT_SVCURL5195 = process.env.VCAP_URL5195 || 'https://somesvc5195.example.com/getData';
const DB_URL5195 = process.env.DB_URL5195 || 'https://somedb5195.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16872</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
