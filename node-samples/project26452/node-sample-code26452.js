const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26452;
const EXT_SVCURL25404 = process.env.VCAP_URL25404 || 'https://somesvc25404.example.com/getData';
const DB_URL25404 = process.env.DB_URL25404 || 'https://somedb25404.example.com/getData';
const EXT_SVCURL10014 = process.env.VCAP_URL10014 || 'https://somesvc10014.example.com/getData';
const DB_URL10014 = process.env.DB_URL10014 || 'https://somedb10014.example.com/getData';
const EXT_SVCURL15551 = process.env.VCAP_URL15551 || 'https://somesvc15551.example.com/getData';
const DB_URL15551 = process.env.DB_URL15551 || 'https://somedb15551.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26452</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
