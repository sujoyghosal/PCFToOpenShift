const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10019;
const EXT_SVCURL21708 = process.env.VCAP_URL21708 || 'https://somesvc21708.example.com/getData';
const DB_URL21708 = process.env.DB_URL21708 || 'https://somedb21708.example.com/getData';
const EXT_SVCURL2166 = process.env.VCAP_URL2166 || 'https://somesvc2166.example.com/getData';
const DB_URL2166 = process.env.DB_URL2166 || 'https://somedb2166.example.com/getData';
const EXT_SVCURL17807 = process.env.VCAP_URL17807 || 'https://somesvc17807.example.com/getData';
const DB_URL17807 = process.env.DB_URL17807 || 'https://somedb17807.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10019</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));