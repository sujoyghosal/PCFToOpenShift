const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18585;
const EXT_SVCURL32297 = process.env.VCAP_URL32297 || 'https://somesv32297.example.com/getData';
const EXT_SVCURL33752 = process.env.VCAP_URL33752 || 'https://somesv33752.example.com/getData';
const EXT_SVCURL12868 = process.env.VCAP_URL12868 || 'https://somesv12868.example.com/getData';
const EXT_SVCURL4555 = process.env.VCAP_URL4555 || 'https://somesv4555.example.com/getData';
const EXT_SVCURL25007 = process.env.VCAP_URL25007 || 'https://somesv25007.example.com/getData';
const EXT_SVCURL32866 = process.env.VCAP_URL32866 || 'https://somesv32866.example.com/getData';
const EXT_SVCURL8279 = process.env.VCAP_URL8279 || 'https://somesv8279.example.com/getData';
const EXT_SVCURL9596 = process.env.VCAP_URL9596 || 'https://somesv9596.example.com/getData';
const EXT_SVCURL10752 = process.env.VCAP_URL10752 || 'https://somesv10752.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18585</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
