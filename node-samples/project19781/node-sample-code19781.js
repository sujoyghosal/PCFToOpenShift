const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 19781;
const EXT_SVCURL11666 = process.env.VCAP_URL11666 || 'https://somesvc11666.example.com/getData';
const DB_URL11666 = process.env.DB_URL11666 || 'https://somedb11666.example.com/getData';
const EXT_SVCURL5237 = process.env.VCAP_URL5237 || 'https://somesvc5237.example.com/getData';
const DB_URL5237 = process.env.DB_URL5237 || 'https://somedb5237.example.com/getData';
const EXT_SVCURL14453 = process.env.VCAP_URL14453 || 'https://somesvc14453.example.com/getData';
const DB_URL14453 = process.env.DB_URL14453 || 'https://somedb14453.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19781</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
