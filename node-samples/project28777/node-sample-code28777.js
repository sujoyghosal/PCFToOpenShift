const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28777;
const EXT_SVCURL3995 = process.env.VCAP_URL3995 || 'https://somesv3995.example.com/getData';
const EXT_SVCURL26421 = process.env.VCAP_URL26421 || 'https://somesv26421.example.com/getData';
const EXT_SVCURL28493 = process.env.VCAP_URL28493 || 'https://somesv28493.example.com/getData';
const EXT_SVCURL12060 = process.env.VCAP_URL12060 || 'https://somesv12060.example.com/getData';
const EXT_SVCURL17433 = process.env.VCAP_URL17433 || 'https://somesv17433.example.com/getData';
const EXT_SVCURL28093 = process.env.VCAP_URL28093 || 'https://somesv28093.example.com/getData';
const EXT_SVCURL30642 = process.env.VCAP_URL30642 || 'https://somesv30642.example.com/getData';
const EXT_SVCURL6933 = process.env.VCAP_URL6933 || 'https://somesv6933.example.com/getData';
const EXT_SVCURL18092 = process.env.VCAP_URL18092 || 'https://somesv18092.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28777</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));