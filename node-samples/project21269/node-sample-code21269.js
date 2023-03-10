const PORT = process.env.PORT || 21269;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL6317 = process.env.VCAP_URL6317 || 'https://somesvc6317.example.com/getData';
const DB_URL6317 = process.env.DB_URL6317 || 'https://somedb6317.example.com/getData';
const EXT_SVCURL5059 = process.env.VCAP_URL5059 || 'https://somesvc5059.example.com/getData';
const DB_URL5059 = process.env.DB_URL5059 || 'https://somedb5059.example.com/getData';
const EXT_SVCURL32978 = process.env.VCAP_URL32978 || 'https://somesvc32978.example.com/getData';
const DB_URL32978 = process.env.DB_URL32978 || 'https://somedb32978.example.com/getData';
const EXT_SVCURL18103 = process.env.VCAP_URL18103 || 'https://somesvc18103.example.com/getData';
const DB_URL18103 = process.env.DB_URL18103 || 'https://somedb18103.example.com/getData';
const EXT_SVCURL21938 = process.env.VCAP_URL21938 || 'https://somesvc21938.example.com/getData';
const DB_URL21938 = process.env.DB_URL21938 || 'https://somedb21938.example.com/getData';
const EXT_SVCURL3467 = process.env.VCAP_URL3467 || 'https://somesvc3467.example.com/getData';
const DB_URL3467 = process.env.DB_URL3467 || 'https://somedb3467.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21269</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
