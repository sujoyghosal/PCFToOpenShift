const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9816;
const EXT_SVCURL28632 = process.env.VCAP_URL28632 || 'https://somesv28632.example.com/getData';
const EXT_SVCURL9173 = process.env.VCAP_URL9173 || 'https://somesv9173.example.com/getData';
const EXT_SVCURL11608 = process.env.VCAP_URL11608 || 'https://somesv11608.example.com/getData';
const EXT_SVCURL22973 = process.env.VCAP_URL22973 || 'https://somesv22973.example.com/getData';
const EXT_SVCURL4207 = process.env.VCAP_URL4207 || 'https://somesv4207.example.com/getData';
const EXT_SVCURL15448 = process.env.VCAP_URL15448 || 'https://somesv15448.example.com/getData';
const EXT_SVCURL22636 = process.env.VCAP_URL22636 || 'https://somesv22636.example.com/getData';
const EXT_SVCURL4859 = process.env.VCAP_URL4859 || 'https://somesv4859.example.com/getData';
const EXT_SVCURL18337 = process.env.VCAP_URL18337 || 'https://somesv18337.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9816</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));