const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6893;
const EXT_SVCURL13705 = process.env.VCAP_URL13705 || 'https://somesvc13705.example.com/getData';
const DB_URL13705 = process.env.DB_URL13705 || 'https://somedb13705.example.com/getData';
const EXT_SVCURL4567 = process.env.VCAP_URL4567 || 'https://somesvc4567.example.com/getData';
const DB_URL4567 = process.env.DB_URL4567 || 'https://somedb4567.example.com/getData';
const EXT_SVCURL2867 = process.env.VCAP_URL2867 || 'https://somesvc2867.example.com/getData';
const DB_URL2867 = process.env.DB_URL2867 || 'https://somedb2867.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6893</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));