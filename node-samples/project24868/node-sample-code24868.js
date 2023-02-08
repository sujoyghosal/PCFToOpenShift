const PORT = process.env.PORT || 24868;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const EXT_SVCURL9464 = process.env.VCAP_URL9464 || 'https://somesvc9464.example.com/getData';
const DB_URL9464 = process.env.DB_URL9464 || 'https://somedb9464.example.com/getData';
const EXT_SVCURL23159 = process.env.VCAP_URL23159 || 'https://somesvc23159.example.com/getData';
const DB_URL23159 = process.env.DB_URL23159 || 'https://somedb23159.example.com/getData';
const EXT_SVCURL10908 = process.env.VCAP_URL10908 || 'https://somesvc10908.example.com/getData';
const DB_URL10908 = process.env.DB_URL10908 || 'https://somedb10908.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24868</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
