const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12210;
const EXT_SVCURL10965 = process.env.VCAP_URL10965 || 'https://somesvc10965.example.com/getData';
const DB_URL10965 = process.env.DB_URL10965 || 'https://somedb10965.example.com/getData';
const EXT_SVCURL27488 = process.env.VCAP_URL27488 || 'https://somesvc27488.example.com/getData';
const DB_URL27488 = process.env.DB_URL27488 || 'https://somedb27488.example.com/getData';
const EXT_SVCURL14925 = process.env.VCAP_URL14925 || 'https://somesvc14925.example.com/getData';
const DB_URL14925 = process.env.DB_URL14925 || 'https://somedb14925.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12210</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
