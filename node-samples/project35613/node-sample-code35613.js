const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35613;
const EXT_SVCURL8779 = process.env.VCAP_URL8779 || 'https://somesvc8779.example.com/getData';
const DB_URL8779 = process.env.DB_URL8779 || 'https://somedb8779.example.com/getData';
const EXT_SVCURL33939 = process.env.VCAP_URL33939 || 'https://somesvc33939.example.com/getData';
const DB_URL33939 = process.env.DB_URL33939 || 'https://somedb33939.example.com/getData';
const EXT_SVCURL15471 = process.env.VCAP_URL15471 || 'https://somesvc15471.example.com/getData';
const DB_URL15471 = process.env.DB_URL15471 || 'https://somedb15471.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35613</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
