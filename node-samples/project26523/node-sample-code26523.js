const PORT = process.env.PORT || 26523;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL12956 = process.env.VCAP_URL12956 || 'https://somesvc12956.example.com/getData';
const DB_URL12956 = process.env.DB_URL12956 || 'https://somedb12956.example.com/getData';
const EXT_SVCURL34156 = process.env.VCAP_URL34156 || 'https://somesvc34156.example.com/getData';
const DB_URL34156 = process.env.DB_URL34156 || 'https://somedb34156.example.com/getData';
const EXT_SVCURL3102 = process.env.VCAP_URL3102 || 'https://somesvc3102.example.com/getData';
const DB_URL3102 = process.env.DB_URL3102 || 'https://somedb3102.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26523</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
