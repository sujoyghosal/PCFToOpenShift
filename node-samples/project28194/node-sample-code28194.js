const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28194;
const EXT_SVCURL3329 = process.env.VCAP_URL3329 || 'https://somesvc3329.example.com/getData';
const DB_URL3329 = process.env.DB_URL3329 || 'https://somedb3329.example.com/getData';
const EXT_SVCURL15600 = process.env.VCAP_URL15600 || 'https://somesvc15600.example.com/getData';
const DB_URL15600 = process.env.DB_URL15600 || 'https://somedb15600.example.com/getData';
const EXT_SVCURL23194 = process.env.VCAP_URL23194 || 'https://somesvc23194.example.com/getData';
const DB_URL23194 = process.env.DB_URL23194 || 'https://somedb23194.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28194</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));