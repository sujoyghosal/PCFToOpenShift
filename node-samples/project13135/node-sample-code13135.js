const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13135;
const EXT_SVCURL15202 = process.env.VCAP_URL15202 || 'https://somesv15202.example.com/getData';
const EXT_SVCURL5439 = process.env.VCAP_URL5439 || 'https://somesv5439.example.com/getData';
const EXT_SVCURL25926 = process.env.VCAP_URL25926 || 'https://somesv25926.example.com/getData';
const EXT_SVCURL21284 = process.env.VCAP_URL21284 || 'https://somesv21284.example.com/getData';
const EXT_SVCURL19560 = process.env.VCAP_URL19560 || 'https://somesv19560.example.com/getData';
const EXT_SVCURL8412 = process.env.VCAP_URL8412 || 'https://somesv8412.example.com/getData';
const EXT_SVCURL8939 = process.env.VCAP_URL8939 || 'https://somesv8939.example.com/getData';
const EXT_SVCURL6154 = process.env.VCAP_URL6154 || 'https://somesv6154.example.com/getData';
const EXT_SVCURL33716 = process.env.VCAP_URL33716 || 'https://somesv33716.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13135</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
