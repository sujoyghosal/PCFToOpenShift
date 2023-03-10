const PORT = process.env.PORT || 36115;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const EXT_SVCURL30646 = process.env.VCAP_URL30646 || 'https://somesvc30646.example.com/getData';
const DB_URL30646 = process.env.DB_URL30646 || 'https://somedb30646.example.com/getData';
const EXT_SVCURL22688 = process.env.VCAP_URL22688 || 'https://somesvc22688.example.com/getData';
const DB_URL22688 = process.env.DB_URL22688 || 'https://somedb22688.example.com/getData';
const EXT_SVCURL2506 = process.env.VCAP_URL2506 || 'https://somesvc2506.example.com/getData';
const DB_URL2506 = process.env.DB_URL2506 || 'https://somedb2506.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36115</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
