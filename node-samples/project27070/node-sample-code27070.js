const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27070;
const EXT_SVCURL31541 = process.env.VCAP_URL31541 || 'https://somesvc31541.example.com/getData';
const DB_URL31541 = process.env.DB_URL31541 || 'https://somedb31541.example.com/getData';
const EXT_SVCURL31227 = process.env.VCAP_URL31227 || 'https://somesvc31227.example.com/getData';
const DB_URL31227 = process.env.DB_URL31227 || 'https://somedb31227.example.com/getData';
const EXT_SVCURL19300 = process.env.VCAP_URL19300 || 'https://somesvc19300.example.com/getData';
const DB_URL19300 = process.env.DB_URL19300 || 'https://somedb19300.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27070</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));