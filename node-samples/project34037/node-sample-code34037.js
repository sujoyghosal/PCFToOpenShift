const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34037;
const EXT_SVCURL22506 = process.env.VCAP_URL22506 || 'https://somesvc22506.example.com/getData';
const DB_URL22506 = process.env.DB_URL22506 || 'https://somedb22506.example.com/getData';
const EXT_SVCURL3869 = process.env.VCAP_URL3869 || 'https://somesvc3869.example.com/getData';
const DB_URL3869 = process.env.DB_URL3869 || 'https://somedb3869.example.com/getData';
const EXT_SVCURL20279 = process.env.VCAP_URL20279 || 'https://somesvc20279.example.com/getData';
const DB_URL20279 = process.env.DB_URL20279 || 'https://somedb20279.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34037</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
