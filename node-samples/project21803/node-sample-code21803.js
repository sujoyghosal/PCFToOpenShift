const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21803;
const EXT_SVCURL8825 = process.env.VCAP_URL8825 || 'https://somesvc8825.example.com/getData';
const DB_URL8825 = process.env.DB_URL8825 || 'https://somedb8825.example.com/getData';
const EXT_SVCURL2031 = process.env.VCAP_URL2031 || 'https://somesvc2031.example.com/getData';
const DB_URL2031 = process.env.DB_URL2031 || 'https://somedb2031.example.com/getData';
const EXT_SVCURL27962 = process.env.VCAP_URL27962 || 'https://somesvc27962.example.com/getData';
const DB_URL27962 = process.env.DB_URL27962 || 'https://somedb27962.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21803</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));