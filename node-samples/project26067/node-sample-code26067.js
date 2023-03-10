const PORT = process.env.PORT || 26067;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL12481 = process.env.VCAP_URL12481 || 'https://somesvc12481.example.com/getData';
const DB_URL12481 = process.env.DB_URL12481 || 'https://somedb12481.example.com/getData';
const EXT_SVCURL34535 = process.env.VCAP_URL34535 || 'https://somesvc34535.example.com/getData';
const DB_URL34535 = process.env.DB_URL34535 || 'https://somedb34535.example.com/getData';
const EXT_SVCURL18571 = process.env.VCAP_URL18571 || 'https://somesvc18571.example.com/getData';
const DB_URL18571 = process.env.DB_URL18571 || 'https://somedb18571.example.com/getData';
const EXT_SVCURL25671 = process.env.VCAP_URL25671 || 'https://somesvc25671.example.com/getData';
const DB_URL25671 = process.env.DB_URL25671 || 'https://somedb25671.example.com/getData';
const EXT_SVCURL12074 = process.env.VCAP_URL12074 || 'https://somesvc12074.example.com/getData';
const DB_URL12074 = process.env.DB_URL12074 || 'https://somedb12074.example.com/getData';
const EXT_SVCURL30477 = process.env.VCAP_URL30477 || 'https://somesvc30477.example.com/getData';
const DB_URL30477 = process.env.DB_URL30477 || 'https://somedb30477.example.com/getData';
const EXT_SVCURL31846 = process.env.VCAP_URL31846 || 'https://somesvc31846.example.com/getData';
const DB_URL31846 = process.env.DB_URL31846 || 'https://somedb31846.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26067</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
