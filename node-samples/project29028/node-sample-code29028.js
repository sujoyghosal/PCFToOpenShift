const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29028;
const EXT_SVCURL2650 = process.env.VCAP_URL2650 || 'https://somesv2650.example.com/getData';
const EXT_SVCURL25575 = process.env.VCAP_URL25575 || 'https://somesv25575.example.com/getData';
const EXT_SVCURL17475 = process.env.VCAP_URL17475 || 'https://somesv17475.example.com/getData';
const EXT_SVCURL8910 = process.env.VCAP_URL8910 || 'https://somesv8910.example.com/getData';
const EXT_SVCURL15162 = process.env.VCAP_URL15162 || 'https://somesv15162.example.com/getData';
const EXT_SVCURL25360 = process.env.VCAP_URL25360 || 'https://somesv25360.example.com/getData';
const EXT_SVCURL28951 = process.env.VCAP_URL28951 || 'https://somesv28951.example.com/getData';
const EXT_SVCURL28056 = process.env.VCAP_URL28056 || 'https://somesv28056.example.com/getData';
const EXT_SVCURL7781 = process.env.VCAP_URL7781 || 'https://somesv7781.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29028</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
