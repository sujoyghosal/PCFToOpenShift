const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25554;
const EXT_SVCURL33512 = process.env.VCAP_URL33512 || 'https://somesvc33512.example.com/getData';
const DB_URL33512 = process.env.DB_URL33512 || 'https://somedb33512.example.com/getData';
const EXT_SVCURL28964 = process.env.VCAP_URL28964 || 'https://somesvc28964.example.com/getData';
const DB_URL28964 = process.env.DB_URL28964 || 'https://somedb28964.example.com/getData';
const EXT_SVCURL29961 = process.env.VCAP_URL29961 || 'https://somesvc29961.example.com/getData';
const DB_URL29961 = process.env.DB_URL29961 || 'https://somedb29961.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25554</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));