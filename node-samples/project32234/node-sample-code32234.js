const PORT = process.env.PORT || 32234;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL13810 = process.env.VCAP_URL13810 || 'https://somesvc13810.example.com/getData';
const DB_URL13810 = process.env.DB_URL13810 || 'https://somedb13810.example.com/getData';
const EXT_SVCURL30187 = process.env.VCAP_URL30187 || 'https://somesvc30187.example.com/getData';
const DB_URL30187 = process.env.DB_URL30187 || 'https://somedb30187.example.com/getData';
const EXT_SVCURL34606 = process.env.VCAP_URL34606 || 'https://somesvc34606.example.com/getData';
const DB_URL34606 = process.env.DB_URL34606 || 'https://somedb34606.example.com/getData';
const EXT_SVCURL28604 = process.env.VCAP_URL28604 || 'https://somesvc28604.example.com/getData';
const DB_URL28604 = process.env.DB_URL28604 || 'https://somedb28604.example.com/getData';
const EXT_SVCURL13525 = process.env.VCAP_URL13525 || 'https://somesvc13525.example.com/getData';
const DB_URL13525 = process.env.DB_URL13525 || 'https://somedb13525.example.com/getData';
const EXT_SVCURL10462 = process.env.VCAP_URL10462 || 'https://somesvc10462.example.com/getData';
const DB_URL10462 = process.env.DB_URL10462 || 'https://somedb10462.example.com/getData';
const EXT_SVCURL29027 = process.env.VCAP_URL29027 || 'https://somesvc29027.example.com/getData';
const DB_URL29027 = process.env.DB_URL29027 || 'https://somedb29027.example.com/getData';
const EXT_SVCURL15047 = process.env.VCAP_URL15047 || 'https://somesvc15047.example.com/getData';
const DB_URL15047 = process.env.DB_URL15047 || 'https://somedb15047.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32234</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
