const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15768;
const EXT_SVCURL20025 = process.env.VCAP_URL20025 || 'https://somesvc20025.example.com/getData';
const DB_URL20025 = process.env.DB_URL20025 || 'https://somedb20025.example.com/getData';
const EXT_SVCURL29256 = process.env.VCAP_URL29256 || 'https://somesvc29256.example.com/getData';
const DB_URL29256 = process.env.DB_URL29256 || 'https://somedb29256.example.com/getData';
const EXT_SVCURL14964 = process.env.VCAP_URL14964 || 'https://somesvc14964.example.com/getData';
const DB_URL14964 = process.env.DB_URL14964 || 'https://somedb14964.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15768</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));