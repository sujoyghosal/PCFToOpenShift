const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12986;
const EXT_SVCURL9041 = process.env.VCAP_URL9041 || 'https://somesv9041.example.com/getData';
const EXT_SVCURL8408 = process.env.VCAP_URL8408 || 'https://somesv8408.example.com/getData';
const EXT_SVCURL11649 = process.env.VCAP_URL11649 || 'https://somesv11649.example.com/getData';
const EXT_SVCURL18184 = process.env.VCAP_URL18184 || 'https://somesv18184.example.com/getData';
const EXT_SVCURL20212 = process.env.VCAP_URL20212 || 'https://somesv20212.example.com/getData';
const EXT_SVCURL22062 = process.env.VCAP_URL22062 || 'https://somesv22062.example.com/getData';
const EXT_SVCURL12577 = process.env.VCAP_URL12577 || 'https://somesv12577.example.com/getData';
const EXT_SVCURL23979 = process.env.VCAP_URL23979 || 'https://somesv23979.example.com/getData';
const EXT_SVCURL18400 = process.env.VCAP_URL18400 || 'https://somesv18400.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12986</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
