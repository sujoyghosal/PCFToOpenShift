const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14186;
const EXT_SVCURL15323 = process.env.VCAP_URL15323 || 'https://somesv15323.example.com/getData';
const EXT_SVCURL29629 = process.env.VCAP_URL29629 || 'https://somesv29629.example.com/getData';
const EXT_SVCURL21492 = process.env.VCAP_URL21492 || 'https://somesv21492.example.com/getData';
const EXT_SVCURL19761 = process.env.VCAP_URL19761 || 'https://somesv19761.example.com/getData';
const EXT_SVCURL29119 = process.env.VCAP_URL29119 || 'https://somesv29119.example.com/getData';
const EXT_SVCURL9132 = process.env.VCAP_URL9132 || 'https://somesv9132.example.com/getData';
const EXT_SVCURL3841 = process.env.VCAP_URL3841 || 'https://somesv3841.example.com/getData';
const EXT_SVCURL24016 = process.env.VCAP_URL24016 || 'https://somesv24016.example.com/getData';
const EXT_SVCURL15506 = process.env.VCAP_URL15506 || 'https://somesv15506.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14186</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
