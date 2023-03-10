const PORT = process.env.PORT || 14435;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL3995 = process.env.VCAP_URL3995 || 'https://somesvc3995.example.com/getData';
const DB_URL3995 = process.env.DB_URL3995 || 'https://somedb3995.example.com/getData';
const EXT_SVCURL34025 = process.env.VCAP_URL34025 || 'https://somesvc34025.example.com/getData';
const DB_URL34025 = process.env.DB_URL34025 || 'https://somedb34025.example.com/getData';
const EXT_SVCURL11510 = process.env.VCAP_URL11510 || 'https://somesvc11510.example.com/getData';
const DB_URL11510 = process.env.DB_URL11510 || 'https://somedb11510.example.com/getData';
const EXT_SVCURL23965 = process.env.VCAP_URL23965 || 'https://somesvc23965.example.com/getData';
const DB_URL23965 = process.env.DB_URL23965 || 'https://somedb23965.example.com/getData';
const EXT_SVCURL5993 = process.env.VCAP_URL5993 || 'https://somesvc5993.example.com/getData';
const DB_URL5993 = process.env.DB_URL5993 || 'https://somedb5993.example.com/getData';
const EXT_SVCURL16131 = process.env.VCAP_URL16131 || 'https://somesvc16131.example.com/getData';
const DB_URL16131 = process.env.DB_URL16131 || 'https://somedb16131.example.com/getData';
const EXT_SVCURL12922 = process.env.VCAP_URL12922 || 'https://somesvc12922.example.com/getData';
const DB_URL12922 = process.env.DB_URL12922 || 'https://somedb12922.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14435</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
