const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26057;
const EXT_SVCURL32803 = process.env.VCAP_URL32803 || 'https://somesv32803.example.com/getData';
const EXT_SVCURL34707 = process.env.VCAP_URL34707 || 'https://somesv34707.example.com/getData';
const EXT_SVCURL11504 = process.env.VCAP_URL11504 || 'https://somesv11504.example.com/getData';
const EXT_SVCURL12400 = process.env.VCAP_URL12400 || 'https://somesv12400.example.com/getData';
const EXT_SVCURL17173 = process.env.VCAP_URL17173 || 'https://somesv17173.example.com/getData';
const EXT_SVCURL34585 = process.env.VCAP_URL34585 || 'https://somesv34585.example.com/getData';
const EXT_SVCURL29085 = process.env.VCAP_URL29085 || 'https://somesv29085.example.com/getData';
const EXT_SVCURL6769 = process.env.VCAP_URL6769 || 'https://somesv6769.example.com/getData';
const EXT_SVCURL11732 = process.env.VCAP_URL11732 || 'https://somesv11732.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26057</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));