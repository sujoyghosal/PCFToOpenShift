const PORT = process.env.PORT || 16809;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL19573 = process.env.VCAP_URL19573 || 'https://somesvc19573.example.com/getData';
const DB_URL19573 = process.env.DB_URL19573 || 'https://somedb19573.example.com/getData';
const EXT_SVCURL15730 = process.env.VCAP_URL15730 || 'https://somesvc15730.example.com/getData';
const DB_URL15730 = process.env.DB_URL15730 || 'https://somedb15730.example.com/getData';
const EXT_SVCURL30712 = process.env.VCAP_URL30712 || 'https://somesvc30712.example.com/getData';
const DB_URL30712 = process.env.DB_URL30712 || 'https://somedb30712.example.com/getData';
const EXT_SVCURL17066 = process.env.VCAP_URL17066 || 'https://somesvc17066.example.com/getData';
const DB_URL17066 = process.env.DB_URL17066 || 'https://somedb17066.example.com/getData';
const EXT_SVCURL2514 = process.env.VCAP_URL2514 || 'https://somesvc2514.example.com/getData';
const DB_URL2514 = process.env.DB_URL2514 || 'https://somedb2514.example.com/getData';
const EXT_SVCURL5316 = process.env.VCAP_URL5316 || 'https://somesvc5316.example.com/getData';
const DB_URL5316 = process.env.DB_URL5316 || 'https://somedb5316.example.com/getData';
const EXT_SVCURL27852 = process.env.VCAP_URL27852 || 'https://somesvc27852.example.com/getData';
const DB_URL27852 = process.env.DB_URL27852 || 'https://somedb27852.example.com/getData';
const EXT_SVCURL15231 = process.env.VCAP_URL15231 || 'https://somesvc15231.example.com/getData';
const DB_URL15231 = process.env.DB_URL15231 || 'https://somedb15231.example.com/getData';
const EXT_SVCURL33664 = process.env.VCAP_URL33664 || 'https://somesvc33664.example.com/getData';
const DB_URL33664 = process.env.DB_URL33664 || 'https://somedb33664.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16809</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));