const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18304;
const EXT_SVCURL8003 = process.env.VCAP_URL8003 || 'https://somesv8003.example.com/getData';
const EXT_SVCURL22071 = process.env.VCAP_URL22071 || 'https://somesv22071.example.com/getData';
const EXT_SVCURL24693 = process.env.VCAP_URL24693 || 'https://somesv24693.example.com/getData';
const EXT_SVCURL16494 = process.env.VCAP_URL16494 || 'https://somesv16494.example.com/getData';
const EXT_SVCURL18212 = process.env.VCAP_URL18212 || 'https://somesv18212.example.com/getData';
const EXT_SVCURL9559 = process.env.VCAP_URL9559 || 'https://somesv9559.example.com/getData';
const EXT_SVCURL33482 = process.env.VCAP_URL33482 || 'https://somesv33482.example.com/getData';
const EXT_SVCURL11858 = process.env.VCAP_URL11858 || 'https://somesv11858.example.com/getData';
const EXT_SVCURL34465 = process.env.VCAP_URL34465 || 'https://somesv34465.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18304</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
