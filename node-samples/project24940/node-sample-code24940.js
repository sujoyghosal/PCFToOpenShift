const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24940;
const EXT_SVCURL26809 = process.env.VCAP_URL26809 || 'https://somesv26809.example.com/getData';
const EXT_SVCURL13180 = process.env.VCAP_URL13180 || 'https://somesv13180.example.com/getData';
const EXT_SVCURL31695 = process.env.VCAP_URL31695 || 'https://somesv31695.example.com/getData';
const EXT_SVCURL10394 = process.env.VCAP_URL10394 || 'https://somesv10394.example.com/getData';
const EXT_SVCURL20511 = process.env.VCAP_URL20511 || 'https://somesv20511.example.com/getData';
const EXT_SVCURL16434 = process.env.VCAP_URL16434 || 'https://somesv16434.example.com/getData';
const EXT_SVCURL12152 = process.env.VCAP_URL12152 || 'https://somesv12152.example.com/getData';
const EXT_SVCURL26380 = process.env.VCAP_URL26380 || 'https://somesv26380.example.com/getData';
const EXT_SVCURL18728 = process.env.VCAP_URL18728 || 'https://somesv18728.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24940</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));