const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14585;
const EXT_SVCURL31685 = process.env.VCAP_URL31685 || 'https://somesv31685.example.com/getData';
const EXT_SVCURL31846 = process.env.VCAP_URL31846 || 'https://somesv31846.example.com/getData';
const EXT_SVCURL28022 = process.env.VCAP_URL28022 || 'https://somesv28022.example.com/getData';
const EXT_SVCURL3744 = process.env.VCAP_URL3744 || 'https://somesv3744.example.com/getData';
const EXT_SVCURL5037 = process.env.VCAP_URL5037 || 'https://somesv5037.example.com/getData';
const EXT_SVCURL16929 = process.env.VCAP_URL16929 || 'https://somesv16929.example.com/getData';
const EXT_SVCURL31717 = process.env.VCAP_URL31717 || 'https://somesv31717.example.com/getData';
const EXT_SVCURL29693 = process.env.VCAP_URL29693 || 'https://somesv29693.example.com/getData';
const EXT_SVCURL34714 = process.env.VCAP_URL34714 || 'https://somesv34714.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14585</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));