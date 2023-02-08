const PORT = process.env.PORT || 27962;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL6168 = process.env.VCAP_URL6168 || 'https://somesvc6168.example.com/getData';
const DB_URL6168 = process.env.DB_URL6168 || 'https://somedb6168.example.com/getData';
const EXT_SVCURL27664 = process.env.VCAP_URL27664 || 'https://somesvc27664.example.com/getData';
const DB_URL27664 = process.env.DB_URL27664 || 'https://somedb27664.example.com/getData';
const EXT_SVCURL6171 = process.env.VCAP_URL6171 || 'https://somesvc6171.example.com/getData';
const DB_URL6171 = process.env.DB_URL6171 || 'https://somedb6171.example.com/getData';
const EXT_SVCURL21882 = process.env.VCAP_URL21882 || 'https://somesvc21882.example.com/getData';
const DB_URL21882 = process.env.DB_URL21882 || 'https://somedb21882.example.com/getData';
const EXT_SVCURL32927 = process.env.VCAP_URL32927 || 'https://somesvc32927.example.com/getData';
const DB_URL32927 = process.env.DB_URL32927 || 'https://somedb32927.example.com/getData';
const EXT_SVCURL24416 = process.env.VCAP_URL24416 || 'https://somesvc24416.example.com/getData';
const DB_URL24416 = process.env.DB_URL24416 || 'https://somedb24416.example.com/getData';
const EXT_SVCURL31174 = process.env.VCAP_URL31174 || 'https://somesvc31174.example.com/getData';
const DB_URL31174 = process.env.DB_URL31174 || 'https://somedb31174.example.com/getData';
const EXT_SVCURL4983 = process.env.VCAP_URL4983 || 'https://somesvc4983.example.com/getData';
const DB_URL4983 = process.env.DB_URL4983 || 'https://somedb4983.example.com/getData';
const EXT_SVCURL14437 = process.env.VCAP_URL14437 || 'https://somesvc14437.example.com/getData';
const DB_URL14437 = process.env.DB_URL14437 || 'https://somedb14437.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27962</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
