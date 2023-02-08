const PORT = process.env.PORT || 15188;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL26079 = process.env.VCAP_URL26079 || 'https://somesvc26079.example.com/getData';
const DB_URL26079 = process.env.DB_URL26079 || 'https://somedb26079.example.com/getData';
const EXT_SVCURL18465 = process.env.VCAP_URL18465 || 'https://somesvc18465.example.com/getData';
const DB_URL18465 = process.env.DB_URL18465 || 'https://somedb18465.example.com/getData';
const EXT_SVCURL21859 = process.env.VCAP_URL21859 || 'https://somesvc21859.example.com/getData';
const DB_URL21859 = process.env.DB_URL21859 || 'https://somedb21859.example.com/getData';
const EXT_SVCURL13309 = process.env.VCAP_URL13309 || 'https://somesvc13309.example.com/getData';
const DB_URL13309 = process.env.DB_URL13309 || 'https://somedb13309.example.com/getData';
const EXT_SVCURL20610 = process.env.VCAP_URL20610 || 'https://somesvc20610.example.com/getData';
const DB_URL20610 = process.env.DB_URL20610 || 'https://somedb20610.example.com/getData';
const EXT_SVCURL15520 = process.env.VCAP_URL15520 || 'https://somesvc15520.example.com/getData';
const DB_URL15520 = process.env.DB_URL15520 || 'https://somedb15520.example.com/getData';
const EXT_SVCURL4663 = process.env.VCAP_URL4663 || 'https://somesvc4663.example.com/getData';
const DB_URL4663 = process.env.DB_URL4663 || 'https://somedb4663.example.com/getData';
const EXT_SVCURL34277 = process.env.VCAP_URL34277 || 'https://somesvc34277.example.com/getData';
const DB_URL34277 = process.env.DB_URL34277 || 'https://somedb34277.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15188</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));