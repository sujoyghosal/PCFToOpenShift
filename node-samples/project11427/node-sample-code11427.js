const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11427;
const EXT_SVCURL9205 = process.env.VCAP_URL9205 || 'https://somesvc9205.example.com/getData';
const DB_URL9205 = process.env.DB_URL9205 || 'https://somedb9205.example.com/getData';
const EXT_SVCURL28793 = process.env.VCAP_URL28793 || 'https://somesvc28793.example.com/getData';
const DB_URL28793 = process.env.DB_URL28793 || 'https://somedb28793.example.com/getData';
const EXT_SVCURL34737 = process.env.VCAP_URL34737 || 'https://somesvc34737.example.com/getData';
const DB_URL34737 = process.env.DB_URL34737 || 'https://somedb34737.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11427</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
