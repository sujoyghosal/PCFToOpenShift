const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8729;
const EXT_SVCURL18556 = process.env.VCAP_URL18556 || 'https://somesv18556.example.com/getData';
const EXT_SVCURL31128 = process.env.VCAP_URL31128 || 'https://somesv31128.example.com/getData';
const EXT_SVCURL8284 = process.env.VCAP_URL8284 || 'https://somesv8284.example.com/getData';
const EXT_SVCURL15242 = process.env.VCAP_URL15242 || 'https://somesv15242.example.com/getData';
const EXT_SVCURL24888 = process.env.VCAP_URL24888 || 'https://somesv24888.example.com/getData';
const EXT_SVCURL17450 = process.env.VCAP_URL17450 || 'https://somesv17450.example.com/getData';
const EXT_SVCURL14256 = process.env.VCAP_URL14256 || 'https://somesv14256.example.com/getData';
const EXT_SVCURL21271 = process.env.VCAP_URL21271 || 'https://somesv21271.example.com/getData';
const EXT_SVCURL23787 = process.env.VCAP_URL23787 || 'https://somesv23787.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8729</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
