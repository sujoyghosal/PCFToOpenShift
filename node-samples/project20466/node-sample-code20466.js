const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20466;
const EXT_SVCURL9930 = process.env.VCAP_URL9930 || 'https://somesvc9930.example.com/getData';
const DB_URL9930 = process.env.DB_URL9930 || 'https://somedb9930.example.com/getData';
const EXT_SVCURL11997 = process.env.VCAP_URL11997 || 'https://somesvc11997.example.com/getData';
const DB_URL11997 = process.env.DB_URL11997 || 'https://somedb11997.example.com/getData';
const EXT_SVCURL32662 = process.env.VCAP_URL32662 || 'https://somesvc32662.example.com/getData';
const DB_URL32662 = process.env.DB_URL32662 || 'https://somedb32662.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20466</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));