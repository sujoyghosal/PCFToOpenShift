const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5732;
const EXT_SVCURL18665 = process.env.VCAP_URL18665 || 'https://somesvc18665.example.com/getData';
const DB_URL18665 = process.env.DB_URL18665 || 'https://somedb18665.example.com/getData';
const EXT_SVCURL12816 = process.env.VCAP_URL12816 || 'https://somesvc12816.example.com/getData';
const DB_URL12816 = process.env.DB_URL12816 || 'https://somedb12816.example.com/getData';
const EXT_SVCURL30575 = process.env.VCAP_URL30575 || 'https://somesvc30575.example.com/getData';
const DB_URL30575 = process.env.DB_URL30575 || 'https://somedb30575.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5732</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));