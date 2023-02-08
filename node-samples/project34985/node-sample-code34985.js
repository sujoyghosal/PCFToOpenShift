const PORT = process.env.PORT || 34985;
const http = require("http");
const express = require("express");
const EXT_SVCURL10950 = process.env.VCAP_URL10950 || 'https://somesvc10950.example.com/getData';
const DB_URL10950 = process.env.DB_URL10950 || 'https://somedb10950.example.com/getData';
const EXT_SVCURL8483 = process.env.VCAP_URL8483 || 'https://somesvc8483.example.com/getData';
const DB_URL8483 = process.env.DB_URL8483 || 'https://somedb8483.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34985</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
