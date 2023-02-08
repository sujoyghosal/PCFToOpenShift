const PORT = process.env.PORT || 9186;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL30759 = process.env.VCAP_URL30759 || 'https://somesvc30759.example.com/getData';
const DB_URL30759 = process.env.DB_URL30759 || 'https://somedb30759.example.com/getData';
const EXT_SVCURL33153 = process.env.VCAP_URL33153 || 'https://somesvc33153.example.com/getData';
const DB_URL33153 = process.env.DB_URL33153 || 'https://somedb33153.example.com/getData';
const EXT_SVCURL33517 = process.env.VCAP_URL33517 || 'https://somesvc33517.example.com/getData';
const DB_URL33517 = process.env.DB_URL33517 || 'https://somedb33517.example.com/getData';
const EXT_SVCURL24152 = process.env.VCAP_URL24152 || 'https://somesvc24152.example.com/getData';
const DB_URL24152 = process.env.DB_URL24152 || 'https://somedb24152.example.com/getData';
const EXT_SVCURL13816 = process.env.VCAP_URL13816 || 'https://somesvc13816.example.com/getData';
const DB_URL13816 = process.env.DB_URL13816 || 'https://somedb13816.example.com/getData';
const EXT_SVCURL31613 = process.env.VCAP_URL31613 || 'https://somesvc31613.example.com/getData';
const DB_URL31613 = process.env.DB_URL31613 || 'https://somedb31613.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9186</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));