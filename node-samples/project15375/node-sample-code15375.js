const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15375;
const EXT_SVCURL32609 = process.env.VCAP_URL32609 || 'https://somesv32609.example.com/getData';
const EXT_SVCURL12641 = process.env.VCAP_URL12641 || 'https://somesv12641.example.com/getData';
const EXT_SVCURL25567 = process.env.VCAP_URL25567 || 'https://somesv25567.example.com/getData';
const EXT_SVCURL33236 = process.env.VCAP_URL33236 || 'https://somesv33236.example.com/getData';
const EXT_SVCURL15181 = process.env.VCAP_URL15181 || 'https://somesv15181.example.com/getData';
const EXT_SVCURL34272 = process.env.VCAP_URL34272 || 'https://somesv34272.example.com/getData';
const EXT_SVCURL31888 = process.env.VCAP_URL31888 || 'https://somesv31888.example.com/getData';
const EXT_SVCURL20766 = process.env.VCAP_URL20766 || 'https://somesv20766.example.com/getData';
const EXT_SVCURL26777 = process.env.VCAP_URL26777 || 'https://somesv26777.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15375</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
