const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8443;
const EXT_SVCURL16820 = process.env.VCAP_URL16820 || 'https://somesv16820.example.com/getData';
const EXT_SVCURL7088 = process.env.VCAP_URL7088 || 'https://somesv7088.example.com/getData';
const EXT_SVCURL10710 = process.env.VCAP_URL10710 || 'https://somesv10710.example.com/getData';
const EXT_SVCURL16610 = process.env.VCAP_URL16610 || 'https://somesv16610.example.com/getData';
const EXT_SVCURL11518 = process.env.VCAP_URL11518 || 'https://somesv11518.example.com/getData';
const EXT_SVCURL18578 = process.env.VCAP_URL18578 || 'https://somesv18578.example.com/getData';
const EXT_SVCURL14276 = process.env.VCAP_URL14276 || 'https://somesv14276.example.com/getData';
const EXT_SVCURL30699 = process.env.VCAP_URL30699 || 'https://somesv30699.example.com/getData';
const EXT_SVCURL6117 = process.env.VCAP_URL6117 || 'https://somesv6117.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8443</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));