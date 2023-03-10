const PORT = process.env.PORT || 27626;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const EXT_SVCURL12625 = process.env.VCAP_URL12625 || 'https://somesvc12625.example.com/getData';
const DB_URL12625 = process.env.DB_URL12625 || 'https://somedb12625.example.com/getData';
const EXT_SVCURL18219 = process.env.VCAP_URL18219 || 'https://somesvc18219.example.com/getData';
const DB_URL18219 = process.env.DB_URL18219 || 'https://somedb18219.example.com/getData';
const EXT_SVCURL17607 = process.env.VCAP_URL17607 || 'https://somesvc17607.example.com/getData';
const DB_URL17607 = process.env.DB_URL17607 || 'https://somedb17607.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27626</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
