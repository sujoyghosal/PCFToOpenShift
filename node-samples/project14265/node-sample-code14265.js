const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14265;
const EXT_SVCURL21758 = process.env.VCAP_URL21758 || 'https://somesvc21758.example.com/getData';
const DB_URL21758 = process.env.DB_URL21758 || 'https://somedb21758.example.com/getData';
const EXT_SVCURL34396 = process.env.VCAP_URL34396 || 'https://somesvc34396.example.com/getData';
const DB_URL34396 = process.env.DB_URL34396 || 'https://somedb34396.example.com/getData';
const EXT_SVCURL14151 = process.env.VCAP_URL14151 || 'https://somesvc14151.example.com/getData';
const DB_URL14151 = process.env.DB_URL14151 || 'https://somedb14151.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14265</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));