const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37652;
const EXT_SVCURL18578 = process.env.VCAP_URL18578 || 'https://somesv18578.example.com/getData';
const EXT_SVCURL14418 = process.env.VCAP_URL14418 || 'https://somesv14418.example.com/getData';
const EXT_SVCURL19828 = process.env.VCAP_URL19828 || 'https://somesv19828.example.com/getData';
const EXT_SVCURL24799 = process.env.VCAP_URL24799 || 'https://somesv24799.example.com/getData';
const EXT_SVCURL21057 = process.env.VCAP_URL21057 || 'https://somesv21057.example.com/getData';
const EXT_SVCURL24604 = process.env.VCAP_URL24604 || 'https://somesv24604.example.com/getData';
const EXT_SVCURL15658 = process.env.VCAP_URL15658 || 'https://somesv15658.example.com/getData';
const EXT_SVCURL20543 = process.env.VCAP_URL20543 || 'https://somesv20543.example.com/getData';
const EXT_SVCURL30907 = process.env.VCAP_URL30907 || 'https://somesv30907.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37652</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
