const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25398;
const EXT_SVCURL6038 = process.env.VCAP_URL6038 || 'https://somesv6038.example.com/getData';
const EXT_SVCURL9867 = process.env.VCAP_URL9867 || 'https://somesv9867.example.com/getData';
const EXT_SVCURL30253 = process.env.VCAP_URL30253 || 'https://somesv30253.example.com/getData';
const EXT_SVCURL22265 = process.env.VCAP_URL22265 || 'https://somesv22265.example.com/getData';
const EXT_SVCURL19353 = process.env.VCAP_URL19353 || 'https://somesv19353.example.com/getData';
const EXT_SVCURL19898 = process.env.VCAP_URL19898 || 'https://somesv19898.example.com/getData';
const EXT_SVCURL20643 = process.env.VCAP_URL20643 || 'https://somesv20643.example.com/getData';
const EXT_SVCURL24168 = process.env.VCAP_URL24168 || 'https://somesv24168.example.com/getData';
const EXT_SVCURL14673 = process.env.VCAP_URL14673 || 'https://somesv14673.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25398</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
