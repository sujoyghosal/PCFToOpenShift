const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5988;
const EXT_SVCURL10322 = process.env.VCAP_URL10322 || 'https://somesv10322.example.com/getData';
const EXT_SVCURL11717 = process.env.VCAP_URL11717 || 'https://somesv11717.example.com/getData';
const EXT_SVCURL30007 = process.env.VCAP_URL30007 || 'https://somesv30007.example.com/getData';
const EXT_SVCURL8866 = process.env.VCAP_URL8866 || 'https://somesv8866.example.com/getData';
const EXT_SVCURL3263 = process.env.VCAP_URL3263 || 'https://somesv3263.example.com/getData';
const EXT_SVCURL28768 = process.env.VCAP_URL28768 || 'https://somesv28768.example.com/getData';
const EXT_SVCURL12398 = process.env.VCAP_URL12398 || 'https://somesv12398.example.com/getData';
const EXT_SVCURL6746 = process.env.VCAP_URL6746 || 'https://somesv6746.example.com/getData';
const EXT_SVCURL23311 = process.env.VCAP_URL23311 || 'https://somesv23311.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5988</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));