const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27172;
const EXT_SVCURL18604 = process.env.VCAP_URL18604 || 'https://somesv18604.example.com/getData';
const EXT_SVCURL26339 = process.env.VCAP_URL26339 || 'https://somesv26339.example.com/getData';
const EXT_SVCURL11500 = process.env.VCAP_URL11500 || 'https://somesv11500.example.com/getData';
const EXT_SVCURL13424 = process.env.VCAP_URL13424 || 'https://somesv13424.example.com/getData';
const EXT_SVCURL19303 = process.env.VCAP_URL19303 || 'https://somesv19303.example.com/getData';
const EXT_SVCURL4061 = process.env.VCAP_URL4061 || 'https://somesv4061.example.com/getData';
const EXT_SVCURL12478 = process.env.VCAP_URL12478 || 'https://somesv12478.example.com/getData';
const EXT_SVCURL24475 = process.env.VCAP_URL24475 || 'https://somesv24475.example.com/getData';
const EXT_SVCURL29515 = process.env.VCAP_URL29515 || 'https://somesv29515.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27172</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));