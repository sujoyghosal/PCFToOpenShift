const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33155;
const EXT_SVCURL23775 = process.env.VCAP_URL23775 || 'https://somesv23775.example.com/getData';
const EXT_SVCURL3880 = process.env.VCAP_URL3880 || 'https://somesv3880.example.com/getData';
const EXT_SVCURL20626 = process.env.VCAP_URL20626 || 'https://somesv20626.example.com/getData';
const EXT_SVCURL13109 = process.env.VCAP_URL13109 || 'https://somesv13109.example.com/getData';
const EXT_SVCURL24670 = process.env.VCAP_URL24670 || 'https://somesv24670.example.com/getData';
const EXT_SVCURL24064 = process.env.VCAP_URL24064 || 'https://somesv24064.example.com/getData';
const EXT_SVCURL26469 = process.env.VCAP_URL26469 || 'https://somesv26469.example.com/getData';
const EXT_SVCURL25430 = process.env.VCAP_URL25430 || 'https://somesv25430.example.com/getData';
const EXT_SVCURL23999 = process.env.VCAP_URL23999 || 'https://somesv23999.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33155</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));