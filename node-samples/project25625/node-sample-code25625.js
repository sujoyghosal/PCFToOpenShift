const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25625;
const EXT_SVCURL8109 = process.env.VCAP_URL8109 || 'https://somesv8109.example.com/getData';
const EXT_SVCURL6576 = process.env.VCAP_URL6576 || 'https://somesv6576.example.com/getData';
const EXT_SVCURL34425 = process.env.VCAP_URL34425 || 'https://somesv34425.example.com/getData';
const EXT_SVCURL24686 = process.env.VCAP_URL24686 || 'https://somesv24686.example.com/getData';
const EXT_SVCURL33199 = process.env.VCAP_URL33199 || 'https://somesv33199.example.com/getData';
const EXT_SVCURL18553 = process.env.VCAP_URL18553 || 'https://somesv18553.example.com/getData';
const EXT_SVCURL16747 = process.env.VCAP_URL16747 || 'https://somesv16747.example.com/getData';
const EXT_SVCURL21821 = process.env.VCAP_URL21821 || 'https://somesv21821.example.com/getData';
const EXT_SVCURL33966 = process.env.VCAP_URL33966 || 'https://somesv33966.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25625</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
