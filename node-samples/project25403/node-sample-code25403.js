const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25403;
const EXT_SVCURL6049 = process.env.VCAP_URL6049 || 'https://somesv6049.example.com/getData';
const EXT_SVCURL4799 = process.env.VCAP_URL4799 || 'https://somesv4799.example.com/getData';
const EXT_SVCURL26360 = process.env.VCAP_URL26360 || 'https://somesv26360.example.com/getData';
const EXT_SVCURL24773 = process.env.VCAP_URL24773 || 'https://somesv24773.example.com/getData';
const EXT_SVCURL34563 = process.env.VCAP_URL34563 || 'https://somesv34563.example.com/getData';
const EXT_SVCURL5496 = process.env.VCAP_URL5496 || 'https://somesv5496.example.com/getData';
const EXT_SVCURL31011 = process.env.VCAP_URL31011 || 'https://somesv31011.example.com/getData';
const EXT_SVCURL15943 = process.env.VCAP_URL15943 || 'https://somesv15943.example.com/getData';
const EXT_SVCURL12767 = process.env.VCAP_URL12767 || 'https://somesv12767.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25403</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
