const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35131;
const EXT_SVCURL11013 = process.env.VCAP_URL11013 || 'https://somesv11013.example.com/getData';
const EXT_SVCURL27601 = process.env.VCAP_URL27601 || 'https://somesv27601.example.com/getData';
const EXT_SVCURL24108 = process.env.VCAP_URL24108 || 'https://somesv24108.example.com/getData';
const EXT_SVCURL21289 = process.env.VCAP_URL21289 || 'https://somesv21289.example.com/getData';
const EXT_SVCURL9657 = process.env.VCAP_URL9657 || 'https://somesv9657.example.com/getData';
const EXT_SVCURL9306 = process.env.VCAP_URL9306 || 'https://somesv9306.example.com/getData';
const EXT_SVCURL28378 = process.env.VCAP_URL28378 || 'https://somesv28378.example.com/getData';
const EXT_SVCURL34223 = process.env.VCAP_URL34223 || 'https://somesv34223.example.com/getData';
const EXT_SVCURL2421 = process.env.VCAP_URL2421 || 'https://somesv2421.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35131</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));