const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15116;
const EXT_SVCURL32302 = process.env.VCAP_URL32302 || 'https://somesvc32302.example.com/getData';
const DB_URL32302 = process.env.DB_URL32302 || 'https://somedb32302.example.com/getData';
const EXT_SVCURL26747 = process.env.VCAP_URL26747 || 'https://somesvc26747.example.com/getData';
const DB_URL26747 = process.env.DB_URL26747 || 'https://somedb26747.example.com/getData';
const EXT_SVCURL33180 = process.env.VCAP_URL33180 || 'https://somesvc33180.example.com/getData';
const DB_URL33180 = process.env.DB_URL33180 || 'https://somedb33180.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15116</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
