const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29535;
const EXT_SVCURL33059 = process.env.VCAP_URL33059 || 'https://somesvc33059.example.com/getData';
const DB_URL33059 = process.env.DB_URL33059 || 'https://somedb33059.example.com/getData';
const EXT_SVCURL24128 = process.env.VCAP_URL24128 || 'https://somesvc24128.example.com/getData';
const DB_URL24128 = process.env.DB_URL24128 || 'https://somedb24128.example.com/getData';
const EXT_SVCURL31144 = process.env.VCAP_URL31144 || 'https://somesvc31144.example.com/getData';
const DB_URL31144 = process.env.DB_URL31144 || 'https://somedb31144.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29535</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
