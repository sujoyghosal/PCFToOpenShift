const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9143;
const EXT_SVCURL33791 = process.env.VCAP_URL33791 || 'https://somesvc33791.example.com/getData';
const DB_URL33791 = process.env.DB_URL33791 || 'https://somedb33791.example.com/getData';
const EXT_SVCURL3774 = process.env.VCAP_URL3774 || 'https://somesvc3774.example.com/getData';
const DB_URL3774 = process.env.DB_URL3774 || 'https://somedb3774.example.com/getData';
const EXT_SVCURL4206 = process.env.VCAP_URL4206 || 'https://somesvc4206.example.com/getData';
const DB_URL4206 = process.env.DB_URL4206 || 'https://somedb4206.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9143</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
