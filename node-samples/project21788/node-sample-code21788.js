const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21788;
const EXT_SVCURL2202 = process.env.VCAP_URL2202 || 'https://somesvc2202.example.com/getData';
const DB_URL2202 = process.env.DB_URL2202 || 'https://somedb2202.example.com/getData';
const EXT_SVCURL31382 = process.env.VCAP_URL31382 || 'https://somesvc31382.example.com/getData';
const DB_URL31382 = process.env.DB_URL31382 || 'https://somedb31382.example.com/getData';
const EXT_SVCURL8824 = process.env.VCAP_URL8824 || 'https://somesvc8824.example.com/getData';
const DB_URL8824 = process.env.DB_URL8824 || 'https://somedb8824.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21788</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
