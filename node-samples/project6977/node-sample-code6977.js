const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6977;
const EXT_SVCURL12166 = process.env.VCAP_URL12166 || 'https://somesvc12166.example.com/getData';
const DB_URL12166 = process.env.DB_URL12166 || 'https://somedb12166.example.com/getData';
const EXT_SVCURL18188 = process.env.VCAP_URL18188 || 'https://somesvc18188.example.com/getData';
const DB_URL18188 = process.env.DB_URL18188 || 'https://somedb18188.example.com/getData';
const EXT_SVCURL13717 = process.env.VCAP_URL13717 || 'https://somesvc13717.example.com/getData';
const DB_URL13717 = process.env.DB_URL13717 || 'https://somedb13717.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6977</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));