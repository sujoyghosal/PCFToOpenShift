const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15591;
const EXT_SVCURL10023 = process.env.VCAP_URL10023 || 'https://somesvc10023.example.com/getData';
const DB_URL10023 = process.env.DB_URL10023 || 'https://somedb10023.example.com/getData';
const EXT_SVCURL14343 = process.env.VCAP_URL14343 || 'https://somesvc14343.example.com/getData';
const DB_URL14343 = process.env.DB_URL14343 || 'https://somedb14343.example.com/getData';
const EXT_SVCURL19139 = process.env.VCAP_URL19139 || 'https://somesvc19139.example.com/getData';
const DB_URL19139 = process.env.DB_URL19139 || 'https://somedb19139.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15591</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
