const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29336;
const EXT_SVCURL25056 = process.env.VCAP_URL25056 || 'https://somesv25056.example.com/getData';
const EXT_SVCURL13885 = process.env.VCAP_URL13885 || 'https://somesv13885.example.com/getData';
const EXT_SVCURL33015 = process.env.VCAP_URL33015 || 'https://somesv33015.example.com/getData';
const EXT_SVCURL14707 = process.env.VCAP_URL14707 || 'https://somesv14707.example.com/getData';
const EXT_SVCURL11873 = process.env.VCAP_URL11873 || 'https://somesv11873.example.com/getData';
const EXT_SVCURL9779 = process.env.VCAP_URL9779 || 'https://somesv9779.example.com/getData';
const EXT_SVCURL34245 = process.env.VCAP_URL34245 || 'https://somesv34245.example.com/getData';
const EXT_SVCURL30978 = process.env.VCAP_URL30978 || 'https://somesv30978.example.com/getData';
const EXT_SVCURL11678 = process.env.VCAP_URL11678 || 'https://somesv11678.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29336</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
