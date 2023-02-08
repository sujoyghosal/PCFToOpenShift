const PORT = process.env.PORT || 10244;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL18268 = process.env.VCAP_URL18268 || 'https://somesvc18268.example.com/getData';
const DB_URL18268 = process.env.DB_URL18268 || 'https://somedb18268.example.com/getData';
const EXT_SVCURL5016 = process.env.VCAP_URL5016 || 'https://somesvc5016.example.com/getData';
const DB_URL5016 = process.env.DB_URL5016 || 'https://somedb5016.example.com/getData';
const EXT_SVCURL15114 = process.env.VCAP_URL15114 || 'https://somesvc15114.example.com/getData';
const DB_URL15114 = process.env.DB_URL15114 || 'https://somedb15114.example.com/getData';
const EXT_SVCURL16372 = process.env.VCAP_URL16372 || 'https://somesvc16372.example.com/getData';
const DB_URL16372 = process.env.DB_URL16372 || 'https://somedb16372.example.com/getData';
const EXT_SVCURL19876 = process.env.VCAP_URL19876 || 'https://somesvc19876.example.com/getData';
const DB_URL19876 = process.env.DB_URL19876 || 'https://somedb19876.example.com/getData';
const EXT_SVCURL6522 = process.env.VCAP_URL6522 || 'https://somesvc6522.example.com/getData';
const DB_URL6522 = process.env.DB_URL6522 || 'https://somedb6522.example.com/getData';
const EXT_SVCURL12975 = process.env.VCAP_URL12975 || 'https://somesvc12975.example.com/getData';
const DB_URL12975 = process.env.DB_URL12975 || 'https://somedb12975.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10244</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));