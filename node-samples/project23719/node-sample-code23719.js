const PORT = process.env.PORT || 23719;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL30256 = process.env.VCAP_URL30256 || 'https://somesvc30256.example.com/getData';
const DB_URL30256 = process.env.DB_URL30256 || 'https://somedb30256.example.com/getData';
const EXT_SVCURL18329 = process.env.VCAP_URL18329 || 'https://somesvc18329.example.com/getData';
const DB_URL18329 = process.env.DB_URL18329 || 'https://somedb18329.example.com/getData';
const EXT_SVCURL29920 = process.env.VCAP_URL29920 || 'https://somesvc29920.example.com/getData';
const DB_URL29920 = process.env.DB_URL29920 || 'https://somedb29920.example.com/getData';
const EXT_SVCURL27219 = process.env.VCAP_URL27219 || 'https://somesvc27219.example.com/getData';
const DB_URL27219 = process.env.DB_URL27219 || 'https://somedb27219.example.com/getData';
const EXT_SVCURL21700 = process.env.VCAP_URL21700 || 'https://somesvc21700.example.com/getData';
const DB_URL21700 = process.env.DB_URL21700 || 'https://somedb21700.example.com/getData';
const EXT_SVCURL34757 = process.env.VCAP_URL34757 || 'https://somesvc34757.example.com/getData';
const DB_URL34757 = process.env.DB_URL34757 || 'https://somedb34757.example.com/getData';
const EXT_SVCURL29528 = process.env.VCAP_URL29528 || 'https://somesvc29528.example.com/getData';
const DB_URL29528 = process.env.DB_URL29528 || 'https://somedb29528.example.com/getData';
const EXT_SVCURL31179 = process.env.VCAP_URL31179 || 'https://somesvc31179.example.com/getData';
const DB_URL31179 = process.env.DB_URL31179 || 'https://somedb31179.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23719</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
