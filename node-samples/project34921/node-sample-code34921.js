const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34921;
const EXT_SVCURL27029 = process.env.VCAP_URL27029 || 'https://somesv27029.example.com/getData';
const EXT_SVCURL3615 = process.env.VCAP_URL3615 || 'https://somesv3615.example.com/getData';
const EXT_SVCURL11764 = process.env.VCAP_URL11764 || 'https://somesv11764.example.com/getData';
const EXT_SVCURL8718 = process.env.VCAP_URL8718 || 'https://somesv8718.example.com/getData';
const EXT_SVCURL3956 = process.env.VCAP_URL3956 || 'https://somesv3956.example.com/getData';
const EXT_SVCURL29099 = process.env.VCAP_URL29099 || 'https://somesv29099.example.com/getData';
const EXT_SVCURL28939 = process.env.VCAP_URL28939 || 'https://somesv28939.example.com/getData';
const EXT_SVCURL15436 = process.env.VCAP_URL15436 || 'https://somesv15436.example.com/getData';
const EXT_SVCURL10825 = process.env.VCAP_URL10825 || 'https://somesv10825.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34921</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
