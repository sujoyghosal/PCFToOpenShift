const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25787;
const EXT_SVCURL33883 = process.env.VCAP_URL33883 || 'https://somesv33883.example.com/getData';
const EXT_SVCURL26083 = process.env.VCAP_URL26083 || 'https://somesv26083.example.com/getData';
const EXT_SVCURL9832 = process.env.VCAP_URL9832 || 'https://somesv9832.example.com/getData';
const EXT_SVCURL17654 = process.env.VCAP_URL17654 || 'https://somesv17654.example.com/getData';
const EXT_SVCURL31398 = process.env.VCAP_URL31398 || 'https://somesv31398.example.com/getData';
const EXT_SVCURL18948 = process.env.VCAP_URL18948 || 'https://somesv18948.example.com/getData';
const EXT_SVCURL8891 = process.env.VCAP_URL8891 || 'https://somesv8891.example.com/getData';
const EXT_SVCURL4685 = process.env.VCAP_URL4685 || 'https://somesv4685.example.com/getData';
const EXT_SVCURL12928 = process.env.VCAP_URL12928 || 'https://somesv12928.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25787</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
