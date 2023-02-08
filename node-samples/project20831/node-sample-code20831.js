const PORT = process.env.PORT || 20831;
const http = require("http");
const express = require("express");
const EXT_SVCURL10494 = process.env.VCAP_URL10494 || 'https://somesvc10494.example.com/getData';
const DB_URL10494 = process.env.DB_URL10494 || 'https://somedb10494.example.com/getData';
const EXT_SVCURL9308 = process.env.VCAP_URL9308 || 'https://somesvc9308.example.com/getData';
const DB_URL9308 = process.env.DB_URL9308 || 'https://somedb9308.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20831</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
