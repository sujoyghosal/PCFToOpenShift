const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24657;
const EXT_SVCURL14767 = process.env.VCAP_URL14767 || 'https://somesv14767.example.com/getData';
const EXT_SVCURL7481 = process.env.VCAP_URL7481 || 'https://somesv7481.example.com/getData';
const EXT_SVCURL5486 = process.env.VCAP_URL5486 || 'https://somesv5486.example.com/getData';
const EXT_SVCURL4632 = process.env.VCAP_URL4632 || 'https://somesv4632.example.com/getData';
const EXT_SVCURL30085 = process.env.VCAP_URL30085 || 'https://somesv30085.example.com/getData';
const EXT_SVCURL12099 = process.env.VCAP_URL12099 || 'https://somesv12099.example.com/getData';
const EXT_SVCURL11641 = process.env.VCAP_URL11641 || 'https://somesv11641.example.com/getData';
const EXT_SVCURL11091 = process.env.VCAP_URL11091 || 'https://somesv11091.example.com/getData';
const EXT_SVCURL10318 = process.env.VCAP_URL10318 || 'https://somesv10318.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24657</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));