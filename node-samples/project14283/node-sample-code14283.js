const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14283;
const EXT_SVCURL22282 = process.env.VCAP_URL22282 || 'https://somesv22282.example.com/getData';
const EXT_SVCURL34749 = process.env.VCAP_URL34749 || 'https://somesv34749.example.com/getData';
const EXT_SVCURL11901 = process.env.VCAP_URL11901 || 'https://somesv11901.example.com/getData';
const EXT_SVCURL33415 = process.env.VCAP_URL33415 || 'https://somesv33415.example.com/getData';
const EXT_SVCURL6672 = process.env.VCAP_URL6672 || 'https://somesv6672.example.com/getData';
const EXT_SVCURL9328 = process.env.VCAP_URL9328 || 'https://somesv9328.example.com/getData';
const EXT_SVCURL9784 = process.env.VCAP_URL9784 || 'https://somesv9784.example.com/getData';
const EXT_SVCURL33120 = process.env.VCAP_URL33120 || 'https://somesv33120.example.com/getData';
const EXT_SVCURL18730 = process.env.VCAP_URL18730 || 'https://somesv18730.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14283</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
