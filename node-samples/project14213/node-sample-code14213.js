const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14213;
const EXT_SVCURL28212 = process.env.VCAP_URL28212 || 'https://somesv28212.example.com/getData';
const EXT_SVCURL19210 = process.env.VCAP_URL19210 || 'https://somesv19210.example.com/getData';
const EXT_SVCURL33347 = process.env.VCAP_URL33347 || 'https://somesv33347.example.com/getData';
const EXT_SVCURL18821 = process.env.VCAP_URL18821 || 'https://somesv18821.example.com/getData';
const EXT_SVCURL26468 = process.env.VCAP_URL26468 || 'https://somesv26468.example.com/getData';
const EXT_SVCURL13571 = process.env.VCAP_URL13571 || 'https://somesv13571.example.com/getData';
const EXT_SVCURL28796 = process.env.VCAP_URL28796 || 'https://somesv28796.example.com/getData';
const EXT_SVCURL13056 = process.env.VCAP_URL13056 || 'https://somesv13056.example.com/getData';
const EXT_SVCURL24791 = process.env.VCAP_URL24791 || 'https://somesv24791.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14213</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
