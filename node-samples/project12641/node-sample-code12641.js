const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12641;
const EXT_SVCURL15701 = process.env.VCAP_URL15701 || 'https://somesvc15701.example.com/getData';
const DB_URL15701 = process.env.DB_URL15701 || 'https://somedb15701.example.com/getData';
const EXT_SVCURL10396 = process.env.VCAP_URL10396 || 'https://somesvc10396.example.com/getData';
const DB_URL10396 = process.env.DB_URL10396 || 'https://somedb10396.example.com/getData';
const EXT_SVCURL24157 = process.env.VCAP_URL24157 || 'https://somesvc24157.example.com/getData';
const DB_URL24157 = process.env.DB_URL24157 || 'https://somedb24157.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12641</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));