const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25539;
const EXT_SVCURL22613 = process.env.VCAP_URL22613 || 'https://somesvc22613.example.com/getData';
const DB_URL22613 = process.env.DB_URL22613 || 'https://somedb22613.example.com/getData';
const EXT_SVCURL34249 = process.env.VCAP_URL34249 || 'https://somesvc34249.example.com/getData';
const DB_URL34249 = process.env.DB_URL34249 || 'https://somedb34249.example.com/getData';
const EXT_SVCURL27453 = process.env.VCAP_URL27453 || 'https://somesvc27453.example.com/getData';
const DB_URL27453 = process.env.DB_URL27453 || 'https://somedb27453.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25539</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
