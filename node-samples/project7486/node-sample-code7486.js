const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7486;
const EXT_SVCURL12653 = process.env.VCAP_URL12653 || 'https://somesv12653.example.com/getData';
const EXT_SVCURL17849 = process.env.VCAP_URL17849 || 'https://somesv17849.example.com/getData';
const EXT_SVCURL26446 = process.env.VCAP_URL26446 || 'https://somesv26446.example.com/getData';
const EXT_SVCURL25250 = process.env.VCAP_URL25250 || 'https://somesv25250.example.com/getData';
const EXT_SVCURL11632 = process.env.VCAP_URL11632 || 'https://somesv11632.example.com/getData';
const EXT_SVCURL22629 = process.env.VCAP_URL22629 || 'https://somesv22629.example.com/getData';
const EXT_SVCURL14183 = process.env.VCAP_URL14183 || 'https://somesv14183.example.com/getData';
const EXT_SVCURL12231 = process.env.VCAP_URL12231 || 'https://somesv12231.example.com/getData';
const EXT_SVCURL11226 = process.env.VCAP_URL11226 || 'https://somesv11226.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7486</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
