const PORT = process.env.PORT || 9184;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL29855 = process.env.VCAP_URL29855 || 'https://somesvc29855.example.com/getData';
const DB_URL29855 = process.env.DB_URL29855 || 'https://somedb29855.example.com/getData';
const EXT_SVCURL29483 = process.env.VCAP_URL29483 || 'https://somesvc29483.example.com/getData';
const DB_URL29483 = process.env.DB_URL29483 || 'https://somedb29483.example.com/getData';
const EXT_SVCURL3136 = process.env.VCAP_URL3136 || 'https://somesvc3136.example.com/getData';
const DB_URL3136 = process.env.DB_URL3136 || 'https://somedb3136.example.com/getData';
const EXT_SVCURL29178 = process.env.VCAP_URL29178 || 'https://somesvc29178.example.com/getData';
const DB_URL29178 = process.env.DB_URL29178 || 'https://somedb29178.example.com/getData';
const EXT_SVCURL8681 = process.env.VCAP_URL8681 || 'https://somesvc8681.example.com/getData';
const DB_URL8681 = process.env.DB_URL8681 || 'https://somedb8681.example.com/getData';
const EXT_SVCURL30011 = process.env.VCAP_URL30011 || 'https://somesvc30011.example.com/getData';
const DB_URL30011 = process.env.DB_URL30011 || 'https://somedb30011.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9184</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
