const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18915;
const EXT_SVCURL34337 = process.env.VCAP_URL34337 || 'https://somesvc34337.example.com/getData';
const DB_URL34337 = process.env.DB_URL34337 || 'https://somedb34337.example.com/getData';
const EXT_SVCURL14762 = process.env.VCAP_URL14762 || 'https://somesvc14762.example.com/getData';
const DB_URL14762 = process.env.DB_URL14762 || 'https://somedb14762.example.com/getData';
const EXT_SVCURL18691 = process.env.VCAP_URL18691 || 'https://somesvc18691.example.com/getData';
const DB_URL18691 = process.env.DB_URL18691 || 'https://somedb18691.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18915</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));