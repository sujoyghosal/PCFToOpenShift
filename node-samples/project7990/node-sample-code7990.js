const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7990;
const EXT_SVCURL16351 = process.env.VCAP_URL16351 || 'https://somesv16351.example.com/getData';
const EXT_SVCURL26905 = process.env.VCAP_URL26905 || 'https://somesv26905.example.com/getData';
const EXT_SVCURL6609 = process.env.VCAP_URL6609 || 'https://somesv6609.example.com/getData';
const EXT_SVCURL23940 = process.env.VCAP_URL23940 || 'https://somesv23940.example.com/getData';
const EXT_SVCURL11209 = process.env.VCAP_URL11209 || 'https://somesv11209.example.com/getData';
const EXT_SVCURL31603 = process.env.VCAP_URL31603 || 'https://somesv31603.example.com/getData';
const EXT_SVCURL26760 = process.env.VCAP_URL26760 || 'https://somesv26760.example.com/getData';
const EXT_SVCURL24437 = process.env.VCAP_URL24437 || 'https://somesv24437.example.com/getData';
const EXT_SVCURL4910 = process.env.VCAP_URL4910 || 'https://somesv4910.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7990</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
