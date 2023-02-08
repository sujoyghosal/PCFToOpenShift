const PORT = process.env.PORT || 29567;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const EXT_SVCURL29134 = process.env.VCAP_URL29134 || 'https://somesvc29134.example.com/getData';
const DB_URL29134 = process.env.DB_URL29134 || 'https://somedb29134.example.com/getData';
const EXT_SVCURL23434 = process.env.VCAP_URL23434 || 'https://somesvc23434.example.com/getData';
const DB_URL23434 = process.env.DB_URL23434 || 'https://somedb23434.example.com/getData';
const EXT_SVCURL24789 = process.env.VCAP_URL24789 || 'https://somesvc24789.example.com/getData';
const DB_URL24789 = process.env.DB_URL24789 || 'https://somedb24789.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29567</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
