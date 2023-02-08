const PORT = process.env.PORT || 5025;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL28142 = process.env.VCAP_URL28142 || 'https://somesvc28142.example.com/getData';
const DB_URL28142 = process.env.DB_URL28142 || 'https://somedb28142.example.com/getData';
const EXT_SVCURL17703 = process.env.VCAP_URL17703 || 'https://somesvc17703.example.com/getData';
const DB_URL17703 = process.env.DB_URL17703 || 'https://somedb17703.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5025</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
