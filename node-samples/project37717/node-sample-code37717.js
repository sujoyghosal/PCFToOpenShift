const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37717;
const EXT_SVCURL18053 = process.env.VCAP_URL18053 || 'https://somesv18053.example.com/getData';
const EXT_SVCURL29994 = process.env.VCAP_URL29994 || 'https://somesv29994.example.com/getData';
const EXT_SVCURL15222 = process.env.VCAP_URL15222 || 'https://somesv15222.example.com/getData';
const EXT_SVCURL29810 = process.env.VCAP_URL29810 || 'https://somesv29810.example.com/getData';
const EXT_SVCURL27133 = process.env.VCAP_URL27133 || 'https://somesv27133.example.com/getData';
const EXT_SVCURL2708 = process.env.VCAP_URL2708 || 'https://somesv2708.example.com/getData';
const EXT_SVCURL25873 = process.env.VCAP_URL25873 || 'https://somesv25873.example.com/getData';
const EXT_SVCURL28708 = process.env.VCAP_URL28708 || 'https://somesv28708.example.com/getData';
const EXT_SVCURL17019 = process.env.VCAP_URL17019 || 'https://somesv17019.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37717</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));