const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28805;
const EXT_SVCURL19255 = process.env.VCAP_URL19255 || 'https://somesv19255.example.com/getData';
const EXT_SVCURL26336 = process.env.VCAP_URL26336 || 'https://somesv26336.example.com/getData';
const EXT_SVCURL11467 = process.env.VCAP_URL11467 || 'https://somesv11467.example.com/getData';
const EXT_SVCURL25830 = process.env.VCAP_URL25830 || 'https://somesv25830.example.com/getData';
const EXT_SVCURL18336 = process.env.VCAP_URL18336 || 'https://somesv18336.example.com/getData';
const EXT_SVCURL3246 = process.env.VCAP_URL3246 || 'https://somesv3246.example.com/getData';
const EXT_SVCURL32772 = process.env.VCAP_URL32772 || 'https://somesv32772.example.com/getData';
const EXT_SVCURL15765 = process.env.VCAP_URL15765 || 'https://somesv15765.example.com/getData';
const EXT_SVCURL6557 = process.env.VCAP_URL6557 || 'https://somesv6557.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28805</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));