const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35747;
const EXT_SVCURL9676 = process.env.VCAP_URL9676 || 'https://somesvc9676.example.com/getData';
const DB_URL9676 = process.env.DB_URL9676 || 'https://somedb9676.example.com/getData';
const EXT_SVCURL2287 = process.env.VCAP_URL2287 || 'https://somesvc2287.example.com/getData';
const DB_URL2287 = process.env.DB_URL2287 || 'https://somedb2287.example.com/getData';
const EXT_SVCURL2650 = process.env.VCAP_URL2650 || 'https://somesvc2650.example.com/getData';
const DB_URL2650 = process.env.DB_URL2650 || 'https://somedb2650.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35747</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));