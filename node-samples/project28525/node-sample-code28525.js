const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28525;
const EXT_SVCURL3360 = process.env.VCAP_URL3360 || 'https://somesvc3360.example.com/getData';
const DB_URL3360 = process.env.DB_URL3360 || 'https://somedb3360.example.com/getData';
const EXT_SVCURL22586 = process.env.VCAP_URL22586 || 'https://somesvc22586.example.com/getData';
const DB_URL22586 = process.env.DB_URL22586 || 'https://somedb22586.example.com/getData';
const EXT_SVCURL19312 = process.env.VCAP_URL19312 || 'https://somesvc19312.example.com/getData';
const DB_URL19312 = process.env.DB_URL19312 || 'https://somedb19312.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28525</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));