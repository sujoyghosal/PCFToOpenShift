const PORT = process.env.PORT || 24035;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL25322 = process.env.VCAP_URL25322 || 'https://somesvc25322.example.com/getData';
const DB_URL25322 = process.env.DB_URL25322 || 'https://somedb25322.example.com/getData';
const EXT_SVCURL7716 = process.env.VCAP_URL7716 || 'https://somesvc7716.example.com/getData';
const DB_URL7716 = process.env.DB_URL7716 || 'https://somedb7716.example.com/getData';
const EXT_SVCURL19267 = process.env.VCAP_URL19267 || 'https://somesvc19267.example.com/getData';
const DB_URL19267 = process.env.DB_URL19267 || 'https://somedb19267.example.com/getData';
const EXT_SVCURL16378 = process.env.VCAP_URL16378 || 'https://somesvc16378.example.com/getData';
const DB_URL16378 = process.env.DB_URL16378 || 'https://somedb16378.example.com/getData';
const EXT_SVCURL32272 = process.env.VCAP_URL32272 || 'https://somesvc32272.example.com/getData';
const DB_URL32272 = process.env.DB_URL32272 || 'https://somedb32272.example.com/getData';
const EXT_SVCURL14757 = process.env.VCAP_URL14757 || 'https://somesvc14757.example.com/getData';
const DB_URL14757 = process.env.DB_URL14757 || 'https://somedb14757.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24035</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));