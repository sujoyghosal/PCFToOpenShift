const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12158;
const EXT_SVCURL2005 = process.env.VCAP_URL2005 || 'https://somesvc2005.example.com/getData';
const DB_URL2005 = process.env.DB_URL2005 || 'https://somedb2005.example.com/getData';
const EXT_SVCURL9347 = process.env.VCAP_URL9347 || 'https://somesvc9347.example.com/getData';
const DB_URL9347 = process.env.DB_URL9347 || 'https://somedb9347.example.com/getData';
const EXT_SVCURL18143 = process.env.VCAP_URL18143 || 'https://somesvc18143.example.com/getData';
const DB_URL18143 = process.env.DB_URL18143 || 'https://somedb18143.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12158</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));