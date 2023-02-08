const PORT = process.env.PORT || 32054;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL6124 = process.env.VCAP_URL6124 || 'https://somesvc6124.example.com/getData';
const DB_URL6124 = process.env.DB_URL6124 || 'https://somedb6124.example.com/getData';
const EXT_SVCURL4755 = process.env.VCAP_URL4755 || 'https://somesvc4755.example.com/getData';
const DB_URL4755 = process.env.DB_URL4755 || 'https://somedb4755.example.com/getData';
const EXT_SVCURL7184 = process.env.VCAP_URL7184 || 'https://somesvc7184.example.com/getData';
const DB_URL7184 = process.env.DB_URL7184 || 'https://somedb7184.example.com/getData';
const EXT_SVCURL4593 = process.env.VCAP_URL4593 || 'https://somesvc4593.example.com/getData';
const DB_URL4593 = process.env.DB_URL4593 || 'https://somedb4593.example.com/getData';
const EXT_SVCURL30718 = process.env.VCAP_URL30718 || 'https://somesvc30718.example.com/getData';
const DB_URL30718 = process.env.DB_URL30718 || 'https://somedb30718.example.com/getData';
const EXT_SVCURL4016 = process.env.VCAP_URL4016 || 'https://somesvc4016.example.com/getData';
const DB_URL4016 = process.env.DB_URL4016 || 'https://somedb4016.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32054</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
