const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8413;
const EXT_SVCURL9064 = process.env.VCAP_URL9064 || 'https://somesv9064.example.com/getData';
const EXT_SVCURL14620 = process.env.VCAP_URL14620 || 'https://somesv14620.example.com/getData';
const EXT_SVCURL28308 = process.env.VCAP_URL28308 || 'https://somesv28308.example.com/getData';
const EXT_SVCURL26195 = process.env.VCAP_URL26195 || 'https://somesv26195.example.com/getData';
const EXT_SVCURL27027 = process.env.VCAP_URL27027 || 'https://somesv27027.example.com/getData';
const EXT_SVCURL30503 = process.env.VCAP_URL30503 || 'https://somesv30503.example.com/getData';
const EXT_SVCURL22946 = process.env.VCAP_URL22946 || 'https://somesv22946.example.com/getData';
const EXT_SVCURL20283 = process.env.VCAP_URL20283 || 'https://somesv20283.example.com/getData';
const EXT_SVCURL20808 = process.env.VCAP_URL20808 || 'https://somesv20808.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8413</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
