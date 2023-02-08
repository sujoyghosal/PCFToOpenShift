const PORT = process.env.PORT || 28589;
const http = require("http");
const express = require("express");
const EXT_SVCURL33059 = process.env.VCAP_URL33059 || 'https://somesvc33059.example.com/getData';
const DB_URL33059 = process.env.DB_URL33059 || 'https://somedb33059.example.com/getData';
const EXT_SVCURL9702 = process.env.VCAP_URL9702 || 'https://somesvc9702.example.com/getData';
const DB_URL9702 = process.env.DB_URL9702 || 'https://somedb9702.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28589</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
