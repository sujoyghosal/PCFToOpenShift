const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33580;
const EXT_SVCURL22367 = process.env.VCAP_URL22367 || 'https://somesvc22367.example.com/getData';
const DB_URL22367 = process.env.DB_URL22367 || 'https://somedb22367.example.com/getData';
const EXT_SVCURL32399 = process.env.VCAP_URL32399 || 'https://somesvc32399.example.com/getData';
const DB_URL32399 = process.env.DB_URL32399 || 'https://somedb32399.example.com/getData';
const EXT_SVCURL29757 = process.env.VCAP_URL29757 || 'https://somesvc29757.example.com/getData';
const DB_URL29757 = process.env.DB_URL29757 || 'https://somedb29757.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33580</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
