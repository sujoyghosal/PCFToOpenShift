const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34653;
const EXT_SVCURL31702 = process.env.VCAP_URL31702 || 'https://somesvc31702.example.com/getData';
const DB_URL31702 = process.env.DB_URL31702 || 'https://somedb31702.example.com/getData';
const EXT_SVCURL9395 = process.env.VCAP_URL9395 || 'https://somesvc9395.example.com/getData';
const DB_URL9395 = process.env.DB_URL9395 || 'https://somedb9395.example.com/getData';
const EXT_SVCURL3382 = process.env.VCAP_URL3382 || 'https://somesvc3382.example.com/getData';
const DB_URL3382 = process.env.DB_URL3382 || 'https://somedb3382.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34653</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));