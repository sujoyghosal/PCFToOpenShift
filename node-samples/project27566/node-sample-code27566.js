const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27566;
const EXT_SVCURL20561 = process.env.VCAP_URL20561 || 'https://somesvc20561.example.com/getData';
const DB_URL20561 = process.env.DB_URL20561 || 'https://somedb20561.example.com/getData';
const EXT_SVCURL14122 = process.env.VCAP_URL14122 || 'https://somesvc14122.example.com/getData';
const DB_URL14122 = process.env.DB_URL14122 || 'https://somedb14122.example.com/getData';
const EXT_SVCURL20330 = process.env.VCAP_URL20330 || 'https://somesvc20330.example.com/getData';
const DB_URL20330 = process.env.DB_URL20330 || 'https://somedb20330.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27566</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
