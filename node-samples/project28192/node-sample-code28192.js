const PORT = process.env.PORT || 28192;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const EXT_SVCURL23116 = process.env.VCAP_URL23116 || 'https://somesvc23116.example.com/getData';
const DB_URL23116 = process.env.DB_URL23116 || 'https://somedb23116.example.com/getData';
const EXT_SVCURL2694 = process.env.VCAP_URL2694 || 'https://somesvc2694.example.com/getData';
const DB_URL2694 = process.env.DB_URL2694 || 'https://somedb2694.example.com/getData';
const EXT_SVCURL5795 = process.env.VCAP_URL5795 || 'https://somesvc5795.example.com/getData';
const DB_URL5795 = process.env.DB_URL5795 || 'https://somedb5795.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28192</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
