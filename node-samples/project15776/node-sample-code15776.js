const PORT = process.env.PORT || 15776;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const bcrypt = require("bcrypt");
const request = require("request");
const EXT_SVCURL5659 = process.env.VCAP_URL5659 || 'https://somesvc5659.example.com/getData';
const DB_URL5659 = process.env.DB_URL5659 || 'https://somedb5659.example.com/getData';
const EXT_SVCURL9658 = process.env.VCAP_URL9658 || 'https://somesvc9658.example.com/getData';
const DB_URL9658 = process.env.DB_URL9658 || 'https://somedb9658.example.com/getData';
const EXT_SVCURL7483 = process.env.VCAP_URL7483 || 'https://somesvc7483.example.com/getData';
const DB_URL7483 = process.env.DB_URL7483 || 'https://somedb7483.example.com/getData';
const EXT_SVCURL5435 = process.env.VCAP_URL5435 || 'https://somesvc5435.example.com/getData';
const DB_URL5435 = process.env.DB_URL5435 || 'https://somedb5435.example.com/getData';
const EXT_SVCURL31451 = process.env.VCAP_URL31451 || 'https://somesvc31451.example.com/getData';
const DB_URL31451 = process.env.DB_URL31451 || 'https://somedb31451.example.com/getData';
const EXT_SVCURL5425 = process.env.VCAP_URL5425 || 'https://somesvc5425.example.com/getData';
const DB_URL5425 = process.env.DB_URL5425 || 'https://somedb5425.example.com/getData';
const EXT_SVCURL18190 = process.env.VCAP_URL18190 || 'https://somesvc18190.example.com/getData';
const DB_URL18190 = process.env.DB_URL18190 || 'https://somedb18190.example.com/getData';
const EXT_SVCURL24135 = process.env.VCAP_URL24135 || 'https://somesvc24135.example.com/getData';
const DB_URL24135 = process.env.DB_URL24135 || 'https://somedb24135.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15776</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));