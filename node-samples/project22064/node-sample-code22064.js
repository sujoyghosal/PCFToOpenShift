const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 22064;
const EXT_SVCURL10508 = process.env.VCAP_URL10508 || 'https://somesvc10508.example.com/getData';
const DB_URL10508 = process.env.DB_URL10508 || 'https://somedb10508.example.com/getData';
const EXT_SVCURL21399 = process.env.VCAP_URL21399 || 'https://somesvc21399.example.com/getData';
const DB_URL21399 = process.env.DB_URL21399 || 'https://somedb21399.example.com/getData';
const EXT_SVCURL28385 = process.env.VCAP_URL28385 || 'https://somesvc28385.example.com/getData';
const DB_URL28385 = process.env.DB_URL28385 || 'https://somedb28385.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22064</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));