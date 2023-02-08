const PORT = process.env.PORT || 22733;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL30284 = process.env.VCAP_URL30284 || 'https://somesvc30284.example.com/getData';
const DB_URL30284 = process.env.DB_URL30284 || 'https://somedb30284.example.com/getData';
const EXT_SVCURL25800 = process.env.VCAP_URL25800 || 'https://somesvc25800.example.com/getData';
const DB_URL25800 = process.env.DB_URL25800 || 'https://somedb25800.example.com/getData';
const EXT_SVCURL33547 = process.env.VCAP_URL33547 || 'https://somesvc33547.example.com/getData';
const DB_URL33547 = process.env.DB_URL33547 || 'https://somedb33547.example.com/getData';
const EXT_SVCURL24757 = process.env.VCAP_URL24757 || 'https://somesvc24757.example.com/getData';
const DB_URL24757 = process.env.DB_URL24757 || 'https://somedb24757.example.com/getData';
const EXT_SVCURL22564 = process.env.VCAP_URL22564 || 'https://somesvc22564.example.com/getData';
const DB_URL22564 = process.env.DB_URL22564 || 'https://somedb22564.example.com/getData';
const EXT_SVCURL26930 = process.env.VCAP_URL26930 || 'https://somesvc26930.example.com/getData';
const DB_URL26930 = process.env.DB_URL26930 || 'https://somedb26930.example.com/getData';
const EXT_SVCURL21525 = process.env.VCAP_URL21525 || 'https://somesvc21525.example.com/getData';
const DB_URL21525 = process.env.DB_URL21525 || 'https://somedb21525.example.com/getData';
const EXT_SVCURL6281 = process.env.VCAP_URL6281 || 'https://somesvc6281.example.com/getData';
const DB_URL6281 = process.env.DB_URL6281 || 'https://somedb6281.example.com/getData';
const EXT_SVCURL3595 = process.env.VCAP_URL3595 || 'https://somesvc3595.example.com/getData';
const DB_URL3595 = process.env.DB_URL3595 || 'https://somedb3595.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22733</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));