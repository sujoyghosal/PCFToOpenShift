const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11726;
const EXT_SVCURL32619 = process.env.VCAP_URL32619 || 'https://somesvc32619.example.com/getData';
const DB_URL32619 = process.env.DB_URL32619 || 'https://somedb32619.example.com/getData';
const EXT_SVCURL16039 = process.env.VCAP_URL16039 || 'https://somesvc16039.example.com/getData';
const DB_URL16039 = process.env.DB_URL16039 || 'https://somedb16039.example.com/getData';
const EXT_SVCURL7972 = process.env.VCAP_URL7972 || 'https://somesvc7972.example.com/getData';
const DB_URL7972 = process.env.DB_URL7972 || 'https://somedb7972.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11726</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));