const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5190;
const EXT_SVCURL25578 = process.env.VCAP_URL25578 || 'https://somesvc25578.example.com/getData';
const DB_URL25578 = process.env.DB_URL25578 || 'https://somedb25578.example.com/getData';
const EXT_SVCURL23957 = process.env.VCAP_URL23957 || 'https://somesvc23957.example.com/getData';
const DB_URL23957 = process.env.DB_URL23957 || 'https://somedb23957.example.com/getData';
const EXT_SVCURL6779 = process.env.VCAP_URL6779 || 'https://somesvc6779.example.com/getData';
const DB_URL6779 = process.env.DB_URL6779 || 'https://somedb6779.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5190</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));