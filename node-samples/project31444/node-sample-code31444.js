const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 31444;
const EXT_SVCURL6345 = process.env.VCAP_URL6345 || 'https://somesv6345.example.com/getData';
const EXT_SVCURL9619 = process.env.VCAP_URL9619 || 'https://somesv9619.example.com/getData';
const EXT_SVCURL28897 = process.env.VCAP_URL28897 || 'https://somesv28897.example.com/getData';
const EXT_SVCURL24469 = process.env.VCAP_URL24469 || 'https://somesv24469.example.com/getData';
const EXT_SVCURL13641 = process.env.VCAP_URL13641 || 'https://somesv13641.example.com/getData';
const EXT_SVCURL4477 = process.env.VCAP_URL4477 || 'https://somesv4477.example.com/getData';
const EXT_SVCURL33895 = process.env.VCAP_URL33895 || 'https://somesv33895.example.com/getData';
const EXT_SVCURL3718 = process.env.VCAP_URL3718 || 'https://somesv3718.example.com/getData';
const EXT_SVCURL2700 = process.env.VCAP_URL2700 || 'https://somesv2700.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #31444</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));