const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 19653;
const EXT_SVCURL17139 = process.env.VCAP_URL17139 || 'https://somesvc17139.example.com/getData';
const DB_URL17139 = process.env.DB_URL17139 || 'https://somedb17139.example.com/getData';
const EXT_SVCURL7310 = process.env.VCAP_URL7310 || 'https://somesvc7310.example.com/getData';
const DB_URL7310 = process.env.DB_URL7310 || 'https://somedb7310.example.com/getData';
const EXT_SVCURL23401 = process.env.VCAP_URL23401 || 'https://somesvc23401.example.com/getData';
const DB_URL23401 = process.env.DB_URL23401 || 'https://somedb23401.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19653</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));