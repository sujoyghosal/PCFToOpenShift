const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6621;
const EXT_SVCURL3039 = process.env.VCAP_URL3039 || 'https://somesv3039.example.com/getData';
const EXT_SVCURL8757 = process.env.VCAP_URL8757 || 'https://somesv8757.example.com/getData';
const EXT_SVCURL24176 = process.env.VCAP_URL24176 || 'https://somesv24176.example.com/getData';
const EXT_SVCURL6770 = process.env.VCAP_URL6770 || 'https://somesv6770.example.com/getData';
const EXT_SVCURL4748 = process.env.VCAP_URL4748 || 'https://somesv4748.example.com/getData';
const EXT_SVCURL34030 = process.env.VCAP_URL34030 || 'https://somesv34030.example.com/getData';
const EXT_SVCURL4802 = process.env.VCAP_URL4802 || 'https://somesv4802.example.com/getData';
const EXT_SVCURL10231 = process.env.VCAP_URL10231 || 'https://somesv10231.example.com/getData';
const EXT_SVCURL3944 = process.env.VCAP_URL3944 || 'https://somesv3944.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6621</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));