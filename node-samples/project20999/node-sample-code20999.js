const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20999;
const EXT_SVCURL18066 = process.env.VCAP_URL18066 || 'https://somesv18066.example.com/getData';
const EXT_SVCURL6363 = process.env.VCAP_URL6363 || 'https://somesv6363.example.com/getData';
const EXT_SVCURL19882 = process.env.VCAP_URL19882 || 'https://somesv19882.example.com/getData';
const EXT_SVCURL24974 = process.env.VCAP_URL24974 || 'https://somesv24974.example.com/getData';
const EXT_SVCURL9529 = process.env.VCAP_URL9529 || 'https://somesv9529.example.com/getData';
const EXT_SVCURL5959 = process.env.VCAP_URL5959 || 'https://somesv5959.example.com/getData';
const EXT_SVCURL9248 = process.env.VCAP_URL9248 || 'https://somesv9248.example.com/getData';
const EXT_SVCURL8890 = process.env.VCAP_URL8890 || 'https://somesv8890.example.com/getData';
const EXT_SVCURL27670 = process.env.VCAP_URL27670 || 'https://somesv27670.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20999</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));