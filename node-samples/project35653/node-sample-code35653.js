const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35653;
const EXT_SVCURL10333 = process.env.VCAP_URL10333 || 'https://somesv10333.example.com/getData';
const EXT_SVCURL9071 = process.env.VCAP_URL9071 || 'https://somesv9071.example.com/getData';
const EXT_SVCURL21991 = process.env.VCAP_URL21991 || 'https://somesv21991.example.com/getData';
const EXT_SVCURL6417 = process.env.VCAP_URL6417 || 'https://somesv6417.example.com/getData';
const EXT_SVCURL33481 = process.env.VCAP_URL33481 || 'https://somesv33481.example.com/getData';
const EXT_SVCURL18737 = process.env.VCAP_URL18737 || 'https://somesv18737.example.com/getData';
const EXT_SVCURL17634 = process.env.VCAP_URL17634 || 'https://somesv17634.example.com/getData';
const EXT_SVCURL7962 = process.env.VCAP_URL7962 || 'https://somesv7962.example.com/getData';
const EXT_SVCURL16667 = process.env.VCAP_URL16667 || 'https://somesv16667.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35653</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
