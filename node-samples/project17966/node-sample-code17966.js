const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 17966;
const EXT_SVCURL9400 = process.env.VCAP_URL9400 || 'https://somesvc9400.example.com/getData';
const DB_URL9400 = process.env.DB_URL9400 || 'https://somedb9400.example.com/getData';
const EXT_SVCURL14123 = process.env.VCAP_URL14123 || 'https://somesvc14123.example.com/getData';
const DB_URL14123 = process.env.DB_URL14123 || 'https://somedb14123.example.com/getData';
const EXT_SVCURL3430 = process.env.VCAP_URL3430 || 'https://somesvc3430.example.com/getData';
const DB_URL3430 = process.env.DB_URL3430 || 'https://somedb3430.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17966</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
