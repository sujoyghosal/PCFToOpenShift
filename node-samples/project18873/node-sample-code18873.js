const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18873;
const EXT_SVCURL22775 = process.env.VCAP_URL22775 || 'https://somesv22775.example.com/getData';
const EXT_SVCURL27484 = process.env.VCAP_URL27484 || 'https://somesv27484.example.com/getData';
const EXT_SVCURL9820 = process.env.VCAP_URL9820 || 'https://somesv9820.example.com/getData';
const EXT_SVCURL31259 = process.env.VCAP_URL31259 || 'https://somesv31259.example.com/getData';
const EXT_SVCURL15075 = process.env.VCAP_URL15075 || 'https://somesv15075.example.com/getData';
const EXT_SVCURL16837 = process.env.VCAP_URL16837 || 'https://somesv16837.example.com/getData';
const EXT_SVCURL22927 = process.env.VCAP_URL22927 || 'https://somesv22927.example.com/getData';
const EXT_SVCURL9027 = process.env.VCAP_URL9027 || 'https://somesv9027.example.com/getData';
const EXT_SVCURL19637 = process.env.VCAP_URL19637 || 'https://somesv19637.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18873</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));