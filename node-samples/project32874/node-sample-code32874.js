const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32874;
const EXT_SVCURL12524 = process.env.VCAP_URL12524 || 'https://somesv12524.example.com/getData';
const EXT_SVCURL6791 = process.env.VCAP_URL6791 || 'https://somesv6791.example.com/getData';
const EXT_SVCURL26918 = process.env.VCAP_URL26918 || 'https://somesv26918.example.com/getData';
const EXT_SVCURL25538 = process.env.VCAP_URL25538 || 'https://somesv25538.example.com/getData';
const EXT_SVCURL34594 = process.env.VCAP_URL34594 || 'https://somesv34594.example.com/getData';
const EXT_SVCURL16131 = process.env.VCAP_URL16131 || 'https://somesv16131.example.com/getData';
const EXT_SVCURL24162 = process.env.VCAP_URL24162 || 'https://somesv24162.example.com/getData';
const EXT_SVCURL17735 = process.env.VCAP_URL17735 || 'https://somesv17735.example.com/getData';
const EXT_SVCURL25424 = process.env.VCAP_URL25424 || 'https://somesv25424.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32874</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));