const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23789;
const EXT_SVCURL10903 = process.env.VCAP_URL10903 || 'https://somesv10903.example.com/getData';
const EXT_SVCURL18375 = process.env.VCAP_URL18375 || 'https://somesv18375.example.com/getData';
const EXT_SVCURL14123 = process.env.VCAP_URL14123 || 'https://somesv14123.example.com/getData';
const EXT_SVCURL20211 = process.env.VCAP_URL20211 || 'https://somesv20211.example.com/getData';
const EXT_SVCURL22255 = process.env.VCAP_URL22255 || 'https://somesv22255.example.com/getData';
const EXT_SVCURL6468 = process.env.VCAP_URL6468 || 'https://somesv6468.example.com/getData';
const EXT_SVCURL32813 = process.env.VCAP_URL32813 || 'https://somesv32813.example.com/getData';
const EXT_SVCURL23851 = process.env.VCAP_URL23851 || 'https://somesv23851.example.com/getData';
const EXT_SVCURL25723 = process.env.VCAP_URL25723 || 'https://somesv25723.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23789</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
