const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10349;
const EXT_SVCURL11384 = process.env.VCAP_URL11384 || 'https://somesv11384.example.com/getData';
const EXT_SVCURL15494 = process.env.VCAP_URL15494 || 'https://somesv15494.example.com/getData';
const EXT_SVCURL15502 = process.env.VCAP_URL15502 || 'https://somesv15502.example.com/getData';
const EXT_SVCURL28679 = process.env.VCAP_URL28679 || 'https://somesv28679.example.com/getData';
const EXT_SVCURL17019 = process.env.VCAP_URL17019 || 'https://somesv17019.example.com/getData';
const EXT_SVCURL4056 = process.env.VCAP_URL4056 || 'https://somesv4056.example.com/getData';
const EXT_SVCURL31183 = process.env.VCAP_URL31183 || 'https://somesv31183.example.com/getData';
const EXT_SVCURL27235 = process.env.VCAP_URL27235 || 'https://somesv27235.example.com/getData';
const EXT_SVCURL9736 = process.env.VCAP_URL9736 || 'https://somesv9736.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10349</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));