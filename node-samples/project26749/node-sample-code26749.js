const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26749;
const EXT_SVCURL30844 = process.env.VCAP_URL30844 || 'https://somesvc30844.example.com/getData';
const DB_URL30844 = process.env.DB_URL30844 || 'https://somedb30844.example.com/getData';
const EXT_SVCURL6977 = process.env.VCAP_URL6977 || 'https://somesvc6977.example.com/getData';
const DB_URL6977 = process.env.DB_URL6977 || 'https://somedb6977.example.com/getData';
const EXT_SVCURL27258 = process.env.VCAP_URL27258 || 'https://somesvc27258.example.com/getData';
const DB_URL27258 = process.env.DB_URL27258 || 'https://somedb27258.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26749</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));