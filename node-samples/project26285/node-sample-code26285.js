const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26285;
const EXT_SVCURL19437 = process.env.VCAP_URL19437 || 'https://somesvc19437.example.com/getData';
const DB_URL19437 = process.env.DB_URL19437 || 'https://somedb19437.example.com/getData';
const EXT_SVCURL33044 = process.env.VCAP_URL33044 || 'https://somesvc33044.example.com/getData';
const DB_URL33044 = process.env.DB_URL33044 || 'https://somedb33044.example.com/getData';
const EXT_SVCURL11457 = process.env.VCAP_URL11457 || 'https://somesvc11457.example.com/getData';
const DB_URL11457 = process.env.DB_URL11457 || 'https://somedb11457.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26285</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
