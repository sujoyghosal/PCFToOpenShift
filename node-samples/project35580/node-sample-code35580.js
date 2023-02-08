const PORT = process.env.PORT || 35580;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL27178 = process.env.VCAP_URL27178 || 'https://somesvc27178.example.com/getData';
const DB_URL27178 = process.env.DB_URL27178 || 'https://somedb27178.example.com/getData';
const EXT_SVCURL17443 = process.env.VCAP_URL17443 || 'https://somesvc17443.example.com/getData';
const DB_URL17443 = process.env.DB_URL17443 || 'https://somedb17443.example.com/getData';
const EXT_SVCURL18225 = process.env.VCAP_URL18225 || 'https://somesvc18225.example.com/getData';
const DB_URL18225 = process.env.DB_URL18225 || 'https://somedb18225.example.com/getData';
const EXT_SVCURL10494 = process.env.VCAP_URL10494 || 'https://somesvc10494.example.com/getData';
const DB_URL10494 = process.env.DB_URL10494 || 'https://somedb10494.example.com/getData';
const EXT_SVCURL8610 = process.env.VCAP_URL8610 || 'https://somesvc8610.example.com/getData';
const DB_URL8610 = process.env.DB_URL8610 || 'https://somedb8610.example.com/getData';
const EXT_SVCURL34140 = process.env.VCAP_URL34140 || 'https://somesvc34140.example.com/getData';
const DB_URL34140 = process.env.DB_URL34140 || 'https://somedb34140.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35580</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
