const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10621;
const EXT_SVCURL27900 = process.env.VCAP_URL27900 || 'https://somesvc27900.example.com/getData';
const DB_URL27900 = process.env.DB_URL27900 || 'https://somedb27900.example.com/getData';
const EXT_SVCURL27645 = process.env.VCAP_URL27645 || 'https://somesvc27645.example.com/getData';
const DB_URL27645 = process.env.DB_URL27645 || 'https://somedb27645.example.com/getData';
const EXT_SVCURL29840 = process.env.VCAP_URL29840 || 'https://somesvc29840.example.com/getData';
const DB_URL29840 = process.env.DB_URL29840 || 'https://somedb29840.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10621</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
