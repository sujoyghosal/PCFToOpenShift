const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30027;
const EXT_SVCURL32426 = process.env.VCAP_URL32426 || 'https://somesv32426.example.com/getData';
const EXT_SVCURL11256 = process.env.VCAP_URL11256 || 'https://somesv11256.example.com/getData';
const EXT_SVCURL34019 = process.env.VCAP_URL34019 || 'https://somesv34019.example.com/getData';
const EXT_SVCURL2587 = process.env.VCAP_URL2587 || 'https://somesv2587.example.com/getData';
const EXT_SVCURL34260 = process.env.VCAP_URL34260 || 'https://somesv34260.example.com/getData';
const EXT_SVCURL30235 = process.env.VCAP_URL30235 || 'https://somesv30235.example.com/getData';
const EXT_SVCURL11080 = process.env.VCAP_URL11080 || 'https://somesv11080.example.com/getData';
const EXT_SVCURL11072 = process.env.VCAP_URL11072 || 'https://somesv11072.example.com/getData';
const EXT_SVCURL33999 = process.env.VCAP_URL33999 || 'https://somesv33999.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30027</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));