const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37278;
const EXT_SVCURL32675 = process.env.VCAP_URL32675 || 'https://somesv32675.example.com/getData';
const EXT_SVCURL10700 = process.env.VCAP_URL10700 || 'https://somesv10700.example.com/getData';
const EXT_SVCURL5881 = process.env.VCAP_URL5881 || 'https://somesv5881.example.com/getData';
const EXT_SVCURL28022 = process.env.VCAP_URL28022 || 'https://somesv28022.example.com/getData';
const EXT_SVCURL15827 = process.env.VCAP_URL15827 || 'https://somesv15827.example.com/getData';
const EXT_SVCURL11358 = process.env.VCAP_URL11358 || 'https://somesv11358.example.com/getData';
const EXT_SVCURL22098 = process.env.VCAP_URL22098 || 'https://somesv22098.example.com/getData';
const EXT_SVCURL7226 = process.env.VCAP_URL7226 || 'https://somesv7226.example.com/getData';
const EXT_SVCURL6809 = process.env.VCAP_URL6809 || 'https://somesv6809.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37278</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
