const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18281;
const EXT_SVCURL25170 = process.env.VCAP_URL25170 || 'https://somesv25170.example.com/getData';
const EXT_SVCURL16518 = process.env.VCAP_URL16518 || 'https://somesv16518.example.com/getData';
const EXT_SVCURL8455 = process.env.VCAP_URL8455 || 'https://somesv8455.example.com/getData';
const EXT_SVCURL13254 = process.env.VCAP_URL13254 || 'https://somesv13254.example.com/getData';
const EXT_SVCURL18652 = process.env.VCAP_URL18652 || 'https://somesv18652.example.com/getData';
const EXT_SVCURL25706 = process.env.VCAP_URL25706 || 'https://somesv25706.example.com/getData';
const EXT_SVCURL29359 = process.env.VCAP_URL29359 || 'https://somesv29359.example.com/getData';
const EXT_SVCURL30175 = process.env.VCAP_URL30175 || 'https://somesv30175.example.com/getData';
const EXT_SVCURL3170 = process.env.VCAP_URL3170 || 'https://somesv3170.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18281</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));