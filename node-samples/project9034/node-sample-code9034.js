const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9034;
const EXT_SVCURL25136 = process.env.VCAP_URL25136 || 'https://somesvc25136.example.com/getData';
const DB_URL25136 = process.env.DB_URL25136 || 'https://somedb25136.example.com/getData';
const EXT_SVCURL18973 = process.env.VCAP_URL18973 || 'https://somesvc18973.example.com/getData';
const DB_URL18973 = process.env.DB_URL18973 || 'https://somedb18973.example.com/getData';
const EXT_SVCURL8366 = process.env.VCAP_URL8366 || 'https://somesvc8366.example.com/getData';
const DB_URL8366 = process.env.DB_URL8366 || 'https://somedb8366.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9034</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
