const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20763;
const EXT_SVCURL31152 = process.env.VCAP_URL31152 || 'https://somesvc31152.example.com/getData';
const DB_URL31152 = process.env.DB_URL31152 || 'https://somedb31152.example.com/getData';
const EXT_SVCURL27279 = process.env.VCAP_URL27279 || 'https://somesvc27279.example.com/getData';
const DB_URL27279 = process.env.DB_URL27279 || 'https://somedb27279.example.com/getData';
const EXT_SVCURL9887 = process.env.VCAP_URL9887 || 'https://somesvc9887.example.com/getData';
const DB_URL9887 = process.env.DB_URL9887 || 'https://somedb9887.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20763</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));