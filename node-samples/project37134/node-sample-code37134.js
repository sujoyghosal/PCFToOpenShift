const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37134;
const EXT_SVCURL20694 = process.env.VCAP_URL20694 || 'https://somesvc20694.example.com/getData';
const DB_URL20694 = process.env.DB_URL20694 || 'https://somedb20694.example.com/getData';
const EXT_SVCURL9808 = process.env.VCAP_URL9808 || 'https://somesvc9808.example.com/getData';
const DB_URL9808 = process.env.DB_URL9808 || 'https://somedb9808.example.com/getData';
const EXT_SVCURL19453 = process.env.VCAP_URL19453 || 'https://somesvc19453.example.com/getData';
const DB_URL19453 = process.env.DB_URL19453 || 'https://somedb19453.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37134</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
