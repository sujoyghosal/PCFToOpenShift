const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6565;
const EXT_SVCURL19744 = process.env.VCAP_URL19744 || 'https://somesv19744.example.com/getData';
const EXT_SVCURL28930 = process.env.VCAP_URL28930 || 'https://somesv28930.example.com/getData';
const EXT_SVCURL2382 = process.env.VCAP_URL2382 || 'https://somesv2382.example.com/getData';
const EXT_SVCURL13876 = process.env.VCAP_URL13876 || 'https://somesv13876.example.com/getData';
const EXT_SVCURL26552 = process.env.VCAP_URL26552 || 'https://somesv26552.example.com/getData';
const EXT_SVCURL26178 = process.env.VCAP_URL26178 || 'https://somesv26178.example.com/getData';
const EXT_SVCURL22830 = process.env.VCAP_URL22830 || 'https://somesv22830.example.com/getData';
const EXT_SVCURL28092 = process.env.VCAP_URL28092 || 'https://somesv28092.example.com/getData';
const EXT_SVCURL18478 = process.env.VCAP_URL18478 || 'https://somesv18478.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6565</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
