const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20533;
const EXT_SVCURL9801 = process.env.VCAP_URL9801 || 'https://somesv9801.example.com/getData';
const EXT_SVCURL8719 = process.env.VCAP_URL8719 || 'https://somesv8719.example.com/getData';
const EXT_SVCURL27421 = process.env.VCAP_URL27421 || 'https://somesv27421.example.com/getData';
const EXT_SVCURL3735 = process.env.VCAP_URL3735 || 'https://somesv3735.example.com/getData';
const EXT_SVCURL29718 = process.env.VCAP_URL29718 || 'https://somesv29718.example.com/getData';
const EXT_SVCURL32548 = process.env.VCAP_URL32548 || 'https://somesv32548.example.com/getData';
const EXT_SVCURL34754 = process.env.VCAP_URL34754 || 'https://somesv34754.example.com/getData';
const EXT_SVCURL5561 = process.env.VCAP_URL5561 || 'https://somesv5561.example.com/getData';
const EXT_SVCURL11293 = process.env.VCAP_URL11293 || 'https://somesv11293.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20533</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
