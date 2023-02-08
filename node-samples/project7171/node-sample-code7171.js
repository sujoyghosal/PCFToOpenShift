const PORT = process.env.PORT || 7171;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL23659 = process.env.VCAP_URL23659 || 'https://somesvc23659.example.com/getData';
const DB_URL23659 = process.env.DB_URL23659 || 'https://somedb23659.example.com/getData';
const EXT_SVCURL30389 = process.env.VCAP_URL30389 || 'https://somesvc30389.example.com/getData';
const DB_URL30389 = process.env.DB_URL30389 || 'https://somedb30389.example.com/getData';
const EXT_SVCURL33366 = process.env.VCAP_URL33366 || 'https://somesvc33366.example.com/getData';
const DB_URL33366 = process.env.DB_URL33366 || 'https://somedb33366.example.com/getData';
const EXT_SVCURL32608 = process.env.VCAP_URL32608 || 'https://somesvc32608.example.com/getData';
const DB_URL32608 = process.env.DB_URL32608 || 'https://somedb32608.example.com/getData';
const EXT_SVCURL2274 = process.env.VCAP_URL2274 || 'https://somesvc2274.example.com/getData';
const DB_URL2274 = process.env.DB_URL2274 || 'https://somedb2274.example.com/getData';
const EXT_SVCURL33418 = process.env.VCAP_URL33418 || 'https://somesvc33418.example.com/getData';
const DB_URL33418 = process.env.DB_URL33418 || 'https://somedb33418.example.com/getData';
const EXT_SVCURL33488 = process.env.VCAP_URL33488 || 'https://somesvc33488.example.com/getData';
const DB_URL33488 = process.env.DB_URL33488 || 'https://somedb33488.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7171</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));