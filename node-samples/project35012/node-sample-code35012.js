const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35012;
const EXT_SVCURL16516 = process.env.VCAP_URL16516 || 'https://somesvc16516.example.com/getData';
const DB_URL16516 = process.env.DB_URL16516 || 'https://somedb16516.example.com/getData';
const EXT_SVCURL9768 = process.env.VCAP_URL9768 || 'https://somesvc9768.example.com/getData';
const DB_URL9768 = process.env.DB_URL9768 || 'https://somedb9768.example.com/getData';
const EXT_SVCURL10918 = process.env.VCAP_URL10918 || 'https://somesvc10918.example.com/getData';
const DB_URL10918 = process.env.DB_URL10918 || 'https://somedb10918.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35012</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));