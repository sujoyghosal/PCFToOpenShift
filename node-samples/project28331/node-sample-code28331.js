const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28331;
const EXT_SVCURL14803 = process.env.VCAP_URL14803 || 'https://somesv14803.example.com/getData';
const EXT_SVCURL18525 = process.env.VCAP_URL18525 || 'https://somesv18525.example.com/getData';
const EXT_SVCURL34583 = process.env.VCAP_URL34583 || 'https://somesv34583.example.com/getData';
const EXT_SVCURL3900 = process.env.VCAP_URL3900 || 'https://somesv3900.example.com/getData';
const EXT_SVCURL9700 = process.env.VCAP_URL9700 || 'https://somesv9700.example.com/getData';
const EXT_SVCURL22624 = process.env.VCAP_URL22624 || 'https://somesv22624.example.com/getData';
const EXT_SVCURL30218 = process.env.VCAP_URL30218 || 'https://somesv30218.example.com/getData';
const EXT_SVCURL34763 = process.env.VCAP_URL34763 || 'https://somesv34763.example.com/getData';
const EXT_SVCURL14142 = process.env.VCAP_URL14142 || 'https://somesv14142.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28331</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
