const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 17514;
const EXT_SVCURL25485 = process.env.VCAP_URL25485 || 'https://somesv25485.example.com/getData';
const EXT_SVCURL17408 = process.env.VCAP_URL17408 || 'https://somesv17408.example.com/getData';
const EXT_SVCURL27996 = process.env.VCAP_URL27996 || 'https://somesv27996.example.com/getData';
const EXT_SVCURL20453 = process.env.VCAP_URL20453 || 'https://somesv20453.example.com/getData';
const EXT_SVCURL3908 = process.env.VCAP_URL3908 || 'https://somesv3908.example.com/getData';
const EXT_SVCURL12325 = process.env.VCAP_URL12325 || 'https://somesv12325.example.com/getData';
const EXT_SVCURL26923 = process.env.VCAP_URL26923 || 'https://somesv26923.example.com/getData';
const EXT_SVCURL9099 = process.env.VCAP_URL9099 || 'https://somesv9099.example.com/getData';
const EXT_SVCURL14773 = process.env.VCAP_URL14773 || 'https://somesv14773.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17514</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
