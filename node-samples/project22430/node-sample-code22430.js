const PORT = process.env.PORT || 22430;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL10963 = process.env.VCAP_URL10963 || 'https://somesvc10963.example.com/getData';
const DB_URL10963 = process.env.DB_URL10963 || 'https://somedb10963.example.com/getData';
const EXT_SVCURL29157 = process.env.VCAP_URL29157 || 'https://somesvc29157.example.com/getData';
const DB_URL29157 = process.env.DB_URL29157 || 'https://somedb29157.example.com/getData';
const EXT_SVCURL8463 = process.env.VCAP_URL8463 || 'https://somesvc8463.example.com/getData';
const DB_URL8463 = process.env.DB_URL8463 || 'https://somedb8463.example.com/getData';
const EXT_SVCURL9593 = process.env.VCAP_URL9593 || 'https://somesvc9593.example.com/getData';
const DB_URL9593 = process.env.DB_URL9593 || 'https://somedb9593.example.com/getData';
const EXT_SVCURL13092 = process.env.VCAP_URL13092 || 'https://somesvc13092.example.com/getData';
const DB_URL13092 = process.env.DB_URL13092 || 'https://somedb13092.example.com/getData';
const EXT_SVCURL29501 = process.env.VCAP_URL29501 || 'https://somesvc29501.example.com/getData';
const DB_URL29501 = process.env.DB_URL29501 || 'https://somedb29501.example.com/getData';
const EXT_SVCURL7977 = process.env.VCAP_URL7977 || 'https://somesvc7977.example.com/getData';
const DB_URL7977 = process.env.DB_URL7977 || 'https://somedb7977.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22430</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
