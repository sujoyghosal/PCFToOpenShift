const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33386;
const EXT_SVCURL19700 = process.env.VCAP_URL19700 || 'https://somesv19700.example.com/getData';
const EXT_SVCURL18675 = process.env.VCAP_URL18675 || 'https://somesv18675.example.com/getData';
const EXT_SVCURL13522 = process.env.VCAP_URL13522 || 'https://somesv13522.example.com/getData';
const EXT_SVCURL9102 = process.env.VCAP_URL9102 || 'https://somesv9102.example.com/getData';
const EXT_SVCURL21144 = process.env.VCAP_URL21144 || 'https://somesv21144.example.com/getData';
const EXT_SVCURL10340 = process.env.VCAP_URL10340 || 'https://somesv10340.example.com/getData';
const EXT_SVCURL24482 = process.env.VCAP_URL24482 || 'https://somesv24482.example.com/getData';
const EXT_SVCURL7244 = process.env.VCAP_URL7244 || 'https://somesv7244.example.com/getData';
const EXT_SVCURL31687 = process.env.VCAP_URL31687 || 'https://somesv31687.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33386</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));