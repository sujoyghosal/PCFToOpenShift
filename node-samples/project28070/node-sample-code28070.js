const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28070;
const EXT_SVCURL25187 = process.env.VCAP_URL25187 || 'https://somesv25187.example.com/getData';
const EXT_SVCURL22858 = process.env.VCAP_URL22858 || 'https://somesv22858.example.com/getData';
const EXT_SVCURL3601 = process.env.VCAP_URL3601 || 'https://somesv3601.example.com/getData';
const EXT_SVCURL11176 = process.env.VCAP_URL11176 || 'https://somesv11176.example.com/getData';
const EXT_SVCURL2144 = process.env.VCAP_URL2144 || 'https://somesv2144.example.com/getData';
const EXT_SVCURL26765 = process.env.VCAP_URL26765 || 'https://somesv26765.example.com/getData';
const EXT_SVCURL3531 = process.env.VCAP_URL3531 || 'https://somesv3531.example.com/getData';
const EXT_SVCURL25812 = process.env.VCAP_URL25812 || 'https://somesv25812.example.com/getData';
const EXT_SVCURL32559 = process.env.VCAP_URL32559 || 'https://somesv32559.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28070</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
