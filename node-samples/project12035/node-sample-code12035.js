const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12035;
const EXT_SVCURL33189 = process.env.VCAP_URL33189 || 'https://somesvc33189.example.com/getData';
const DB_URL33189 = process.env.DB_URL33189 || 'https://somedb33189.example.com/getData';
const EXT_SVCURL33826 = process.env.VCAP_URL33826 || 'https://somesvc33826.example.com/getData';
const DB_URL33826 = process.env.DB_URL33826 || 'https://somedb33826.example.com/getData';
const EXT_SVCURL13561 = process.env.VCAP_URL13561 || 'https://somesvc13561.example.com/getData';
const DB_URL13561 = process.env.DB_URL13561 || 'https://somedb13561.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12035</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
