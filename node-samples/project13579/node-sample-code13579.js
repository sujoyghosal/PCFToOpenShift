const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13579;
const EXT_SVCURL34614 = process.env.VCAP_URL34614 || 'https://somesvc34614.example.com/getData';
const DB_URL34614 = process.env.DB_URL34614 || 'https://somedb34614.example.com/getData';
const EXT_SVCURL12135 = process.env.VCAP_URL12135 || 'https://somesvc12135.example.com/getData';
const DB_URL12135 = process.env.DB_URL12135 || 'https://somedb12135.example.com/getData';
const EXT_SVCURL10812 = process.env.VCAP_URL10812 || 'https://somesvc10812.example.com/getData';
const DB_URL10812 = process.env.DB_URL10812 || 'https://somedb10812.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13579</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));