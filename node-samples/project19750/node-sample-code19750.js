const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 19750;
const EXT_SVCURL28569 = process.env.VCAP_URL28569 || 'https://somesvc28569.example.com/getData';
const DB_URL28569 = process.env.DB_URL28569 || 'https://somedb28569.example.com/getData';
const EXT_SVCURL33734 = process.env.VCAP_URL33734 || 'https://somesvc33734.example.com/getData';
const DB_URL33734 = process.env.DB_URL33734 || 'https://somedb33734.example.com/getData';
const EXT_SVCURL6648 = process.env.VCAP_URL6648 || 'https://somesvc6648.example.com/getData';
const DB_URL6648 = process.env.DB_URL6648 || 'https://somedb6648.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19750</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
