const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30437;
const EXT_SVCURL18549 = process.env.VCAP_URL18549 || 'https://somesvc18549.example.com/getData';
const DB_URL18549 = process.env.DB_URL18549 || 'https://somedb18549.example.com/getData';
const EXT_SVCURL13162 = process.env.VCAP_URL13162 || 'https://somesvc13162.example.com/getData';
const DB_URL13162 = process.env.DB_URL13162 || 'https://somedb13162.example.com/getData';
const EXT_SVCURL21399 = process.env.VCAP_URL21399 || 'https://somesvc21399.example.com/getData';
const DB_URL21399 = process.env.DB_URL21399 || 'https://somedb21399.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30437</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));