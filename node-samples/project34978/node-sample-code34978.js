const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34978;
const EXT_SVCURL6341 = process.env.VCAP_URL6341 || 'https://somesvc6341.example.com/getData';
const DB_URL6341 = process.env.DB_URL6341 || 'https://somedb6341.example.com/getData';
const EXT_SVCURL27736 = process.env.VCAP_URL27736 || 'https://somesvc27736.example.com/getData';
const DB_URL27736 = process.env.DB_URL27736 || 'https://somedb27736.example.com/getData';
const EXT_SVCURL22072 = process.env.VCAP_URL22072 || 'https://somesvc22072.example.com/getData';
const DB_URL22072 = process.env.DB_URL22072 || 'https://somedb22072.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34978</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));