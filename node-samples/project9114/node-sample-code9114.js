const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9114;
const EXT_SVCURL19990 = process.env.VCAP_URL19990 || 'https://somesv19990.example.com/getData';
const EXT_SVCURL7336 = process.env.VCAP_URL7336 || 'https://somesv7336.example.com/getData';
const EXT_SVCURL25340 = process.env.VCAP_URL25340 || 'https://somesv25340.example.com/getData';
const EXT_SVCURL18958 = process.env.VCAP_URL18958 || 'https://somesv18958.example.com/getData';
const EXT_SVCURL8991 = process.env.VCAP_URL8991 || 'https://somesv8991.example.com/getData';
const EXT_SVCURL9844 = process.env.VCAP_URL9844 || 'https://somesv9844.example.com/getData';
const EXT_SVCURL31712 = process.env.VCAP_URL31712 || 'https://somesv31712.example.com/getData';
const EXT_SVCURL8181 = process.env.VCAP_URL8181 || 'https://somesv8181.example.com/getData';
const EXT_SVCURL31874 = process.env.VCAP_URL31874 || 'https://somesv31874.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9114</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
