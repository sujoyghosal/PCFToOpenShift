const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21598;
const EXT_SVCURL28050 = process.env.VCAP_URL28050 || 'https://somesvc28050.example.com/getData';
const DB_URL28050 = process.env.DB_URL28050 || 'https://somedb28050.example.com/getData';
const EXT_SVCURL7421 = process.env.VCAP_URL7421 || 'https://somesvc7421.example.com/getData';
const DB_URL7421 = process.env.DB_URL7421 || 'https://somedb7421.example.com/getData';
const EXT_SVCURL7386 = process.env.VCAP_URL7386 || 'https://somesvc7386.example.com/getData';
const DB_URL7386 = process.env.DB_URL7386 || 'https://somedb7386.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21598</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));