const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13648;
const EXT_SVCURL30692 = process.env.VCAP_URL30692 || 'https://somesv30692.example.com/getData';
const EXT_SVCURL20916 = process.env.VCAP_URL20916 || 'https://somesv20916.example.com/getData';
const EXT_SVCURL30837 = process.env.VCAP_URL30837 || 'https://somesv30837.example.com/getData';
const EXT_SVCURL21736 = process.env.VCAP_URL21736 || 'https://somesv21736.example.com/getData';
const EXT_SVCURL24655 = process.env.VCAP_URL24655 || 'https://somesv24655.example.com/getData';
const EXT_SVCURL20085 = process.env.VCAP_URL20085 || 'https://somesv20085.example.com/getData';
const EXT_SVCURL25515 = process.env.VCAP_URL25515 || 'https://somesv25515.example.com/getData';
const EXT_SVCURL12714 = process.env.VCAP_URL12714 || 'https://somesv12714.example.com/getData';
const EXT_SVCURL22531 = process.env.VCAP_URL22531 || 'https://somesv22531.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13648</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
