const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26639;
const EXT_SVCURL16154 = process.env.VCAP_URL16154 || 'https://somesvc16154.example.com/getData';
const DB_URL16154 = process.env.DB_URL16154 || 'https://somedb16154.example.com/getData';
const EXT_SVCURL12377 = process.env.VCAP_URL12377 || 'https://somesvc12377.example.com/getData';
const DB_URL12377 = process.env.DB_URL12377 || 'https://somedb12377.example.com/getData';
const EXT_SVCURL5724 = process.env.VCAP_URL5724 || 'https://somesvc5724.example.com/getData';
const DB_URL5724 = process.env.DB_URL5724 || 'https://somedb5724.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26639</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));