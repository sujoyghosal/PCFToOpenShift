const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23649;
const EXT_SVCURL7680 = process.env.VCAP_URL7680 || 'https://somesv7680.example.com/getData';
const EXT_SVCURL15408 = process.env.VCAP_URL15408 || 'https://somesv15408.example.com/getData';
const EXT_SVCURL16895 = process.env.VCAP_URL16895 || 'https://somesv16895.example.com/getData';
const EXT_SVCURL8652 = process.env.VCAP_URL8652 || 'https://somesv8652.example.com/getData';
const EXT_SVCURL5951 = process.env.VCAP_URL5951 || 'https://somesv5951.example.com/getData';
const EXT_SVCURL3129 = process.env.VCAP_URL3129 || 'https://somesv3129.example.com/getData';
const EXT_SVCURL6947 = process.env.VCAP_URL6947 || 'https://somesv6947.example.com/getData';
const EXT_SVCURL15441 = process.env.VCAP_URL15441 || 'https://somesv15441.example.com/getData';
const EXT_SVCURL26649 = process.env.VCAP_URL26649 || 'https://somesv26649.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23649</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));