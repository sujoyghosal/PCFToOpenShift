const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11603;
const EXT_SVCURL28482 = process.env.VCAP_URL28482 || 'https://somesvc28482.example.com/getData';
const DB_URL28482 = process.env.DB_URL28482 || 'https://somedb28482.example.com/getData';
const EXT_SVCURL32624 = process.env.VCAP_URL32624 || 'https://somesvc32624.example.com/getData';
const DB_URL32624 = process.env.DB_URL32624 || 'https://somedb32624.example.com/getData';
const EXT_SVCURL25867 = process.env.VCAP_URL25867 || 'https://somesvc25867.example.com/getData';
const DB_URL25867 = process.env.DB_URL25867 || 'https://somedb25867.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11603</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));