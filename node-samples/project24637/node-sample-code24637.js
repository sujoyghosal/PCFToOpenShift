const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24637;
const EXT_SVCURL13517 = process.env.VCAP_URL13517 || 'https://somesv13517.example.com/getData';
const EXT_SVCURL4525 = process.env.VCAP_URL4525 || 'https://somesv4525.example.com/getData';
const EXT_SVCURL15628 = process.env.VCAP_URL15628 || 'https://somesv15628.example.com/getData';
const EXT_SVCURL10592 = process.env.VCAP_URL10592 || 'https://somesv10592.example.com/getData';
const EXT_SVCURL16217 = process.env.VCAP_URL16217 || 'https://somesv16217.example.com/getData';
const EXT_SVCURL23813 = process.env.VCAP_URL23813 || 'https://somesv23813.example.com/getData';
const EXT_SVCURL28401 = process.env.VCAP_URL28401 || 'https://somesv28401.example.com/getData';
const EXT_SVCURL21125 = process.env.VCAP_URL21125 || 'https://somesv21125.example.com/getData';
const EXT_SVCURL26699 = process.env.VCAP_URL26699 || 'https://somesv26699.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24637</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));