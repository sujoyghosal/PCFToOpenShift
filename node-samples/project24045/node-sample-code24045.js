const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24045;
const EXT_SVCURL25653 = process.env.VCAP_URL25653 || 'https://somesvc25653.example.com/getData';
const DB_URL25653 = process.env.DB_URL25653 || 'https://somedb25653.example.com/getData';
const EXT_SVCURL4995 = process.env.VCAP_URL4995 || 'https://somesvc4995.example.com/getData';
const DB_URL4995 = process.env.DB_URL4995 || 'https://somedb4995.example.com/getData';
const EXT_SVCURL34238 = process.env.VCAP_URL34238 || 'https://somesvc34238.example.com/getData';
const DB_URL34238 = process.env.DB_URL34238 || 'https://somedb34238.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24045</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
