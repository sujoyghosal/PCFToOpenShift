const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18321;
const EXT_SVCURL18847 = process.env.VCAP_URL18847 || 'https://somesv18847.example.com/getData';
const EXT_SVCURL4142 = process.env.VCAP_URL4142 || 'https://somesv4142.example.com/getData';
const EXT_SVCURL34043 = process.env.VCAP_URL34043 || 'https://somesv34043.example.com/getData';
const EXT_SVCURL11562 = process.env.VCAP_URL11562 || 'https://somesv11562.example.com/getData';
const EXT_SVCURL17673 = process.env.VCAP_URL17673 || 'https://somesv17673.example.com/getData';
const EXT_SVCURL10205 = process.env.VCAP_URL10205 || 'https://somesv10205.example.com/getData';
const EXT_SVCURL32882 = process.env.VCAP_URL32882 || 'https://somesv32882.example.com/getData';
const EXT_SVCURL11248 = process.env.VCAP_URL11248 || 'https://somesv11248.example.com/getData';
const EXT_SVCURL8692 = process.env.VCAP_URL8692 || 'https://somesv8692.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18321</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));