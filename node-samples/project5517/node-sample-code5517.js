const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5517;
const EXT_SVCURL25131 = process.env.VCAP_URL25131 || 'https://somesvc25131.example.com/getData';
const DB_URL25131 = process.env.DB_URL25131 || 'https://somedb25131.example.com/getData';
const EXT_SVCURL4267 = process.env.VCAP_URL4267 || 'https://somesvc4267.example.com/getData';
const DB_URL4267 = process.env.DB_URL4267 || 'https://somedb4267.example.com/getData';
const EXT_SVCURL11676 = process.env.VCAP_URL11676 || 'https://somesvc11676.example.com/getData';
const DB_URL11676 = process.env.DB_URL11676 || 'https://somedb11676.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5517</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
