const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32741;
const EXT_SVCURL24950 = process.env.VCAP_URL24950 || 'https://somesvc24950.example.com/getData';
const DB_URL24950 = process.env.DB_URL24950 || 'https://somedb24950.example.com/getData';
const EXT_SVCURL13803 = process.env.VCAP_URL13803 || 'https://somesvc13803.example.com/getData';
const DB_URL13803 = process.env.DB_URL13803 || 'https://somedb13803.example.com/getData';
const EXT_SVCURL19912 = process.env.VCAP_URL19912 || 'https://somesvc19912.example.com/getData';
const DB_URL19912 = process.env.DB_URL19912 || 'https://somedb19912.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32741</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
