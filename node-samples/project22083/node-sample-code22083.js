const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 22083;
const EXT_SVCURL12723 = process.env.VCAP_URL12723 || 'https://somesv12723.example.com/getData';
const EXT_SVCURL7146 = process.env.VCAP_URL7146 || 'https://somesv7146.example.com/getData';
const EXT_SVCURL26061 = process.env.VCAP_URL26061 || 'https://somesv26061.example.com/getData';
const EXT_SVCURL6257 = process.env.VCAP_URL6257 || 'https://somesv6257.example.com/getData';
const EXT_SVCURL23431 = process.env.VCAP_URL23431 || 'https://somesv23431.example.com/getData';
const EXT_SVCURL11760 = process.env.VCAP_URL11760 || 'https://somesv11760.example.com/getData';
const EXT_SVCURL14320 = process.env.VCAP_URL14320 || 'https://somesv14320.example.com/getData';
const EXT_SVCURL15756 = process.env.VCAP_URL15756 || 'https://somesv15756.example.com/getData';
const EXT_SVCURL20795 = process.env.VCAP_URL20795 || 'https://somesv20795.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22083</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));