const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9798;
const EXT_SVCURL7852 = process.env.VCAP_URL7852 || 'https://somesv7852.example.com/getData';
const EXT_SVCURL19616 = process.env.VCAP_URL19616 || 'https://somesv19616.example.com/getData';
const EXT_SVCURL7325 = process.env.VCAP_URL7325 || 'https://somesv7325.example.com/getData';
const EXT_SVCURL14119 = process.env.VCAP_URL14119 || 'https://somesv14119.example.com/getData';
const EXT_SVCURL5167 = process.env.VCAP_URL5167 || 'https://somesv5167.example.com/getData';
const EXT_SVCURL26834 = process.env.VCAP_URL26834 || 'https://somesv26834.example.com/getData';
const EXT_SVCURL8678 = process.env.VCAP_URL8678 || 'https://somesv8678.example.com/getData';
const EXT_SVCURL30536 = process.env.VCAP_URL30536 || 'https://somesv30536.example.com/getData';
const EXT_SVCURL20477 = process.env.VCAP_URL20477 || 'https://somesv20477.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9798</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));