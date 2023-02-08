const PORT = process.env.PORT || 9074;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL2310 = process.env.VCAP_URL2310 || 'https://somesvc2310.example.com/getData';
const DB_URL2310 = process.env.DB_URL2310 || 'https://somedb2310.example.com/getData';
const EXT_SVCURL6893 = process.env.VCAP_URL6893 || 'https://somesvc6893.example.com/getData';
const DB_URL6893 = process.env.DB_URL6893 || 'https://somedb6893.example.com/getData';
const EXT_SVCURL10216 = process.env.VCAP_URL10216 || 'https://somesvc10216.example.com/getData';
const DB_URL10216 = process.env.DB_URL10216 || 'https://somedb10216.example.com/getData';
const EXT_SVCURL21863 = process.env.VCAP_URL21863 || 'https://somesvc21863.example.com/getData';
const DB_URL21863 = process.env.DB_URL21863 || 'https://somedb21863.example.com/getData';
const EXT_SVCURL25052 = process.env.VCAP_URL25052 || 'https://somesvc25052.example.com/getData';
const DB_URL25052 = process.env.DB_URL25052 || 'https://somedb25052.example.com/getData';
const EXT_SVCURL12872 = process.env.VCAP_URL12872 || 'https://somesvc12872.example.com/getData';
const DB_URL12872 = process.env.DB_URL12872 || 'https://somedb12872.example.com/getData';
const EXT_SVCURL6050 = process.env.VCAP_URL6050 || 'https://somesvc6050.example.com/getData';
const DB_URL6050 = process.env.DB_URL6050 || 'https://somedb6050.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9074</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));