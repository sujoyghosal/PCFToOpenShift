const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8755;
const EXT_SVCURL12055 = process.env.VCAP_URL12055 || 'https://somesv12055.example.com/getData';
const EXT_SVCURL18321 = process.env.VCAP_URL18321 || 'https://somesv18321.example.com/getData';
const EXT_SVCURL9352 = process.env.VCAP_URL9352 || 'https://somesv9352.example.com/getData';
const EXT_SVCURL17476 = process.env.VCAP_URL17476 || 'https://somesv17476.example.com/getData';
const EXT_SVCURL33343 = process.env.VCAP_URL33343 || 'https://somesv33343.example.com/getData';
const EXT_SVCURL31863 = process.env.VCAP_URL31863 || 'https://somesv31863.example.com/getData';
const EXT_SVCURL18709 = process.env.VCAP_URL18709 || 'https://somesv18709.example.com/getData';
const EXT_SVCURL12991 = process.env.VCAP_URL12991 || 'https://somesv12991.example.com/getData';
const EXT_SVCURL20660 = process.env.VCAP_URL20660 || 'https://somesv20660.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8755</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
