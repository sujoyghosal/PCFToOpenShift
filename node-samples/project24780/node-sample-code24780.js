const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24780;
const EXT_SVCURL23868 = process.env.VCAP_URL23868 || 'https://somesv23868.example.com/getData';
const EXT_SVCURL20522 = process.env.VCAP_URL20522 || 'https://somesv20522.example.com/getData';
const EXT_SVCURL10225 = process.env.VCAP_URL10225 || 'https://somesv10225.example.com/getData';
const EXT_SVCURL3993 = process.env.VCAP_URL3993 || 'https://somesv3993.example.com/getData';
const EXT_SVCURL14827 = process.env.VCAP_URL14827 || 'https://somesv14827.example.com/getData';
const EXT_SVCURL3014 = process.env.VCAP_URL3014 || 'https://somesv3014.example.com/getData';
const EXT_SVCURL22013 = process.env.VCAP_URL22013 || 'https://somesv22013.example.com/getData';
const EXT_SVCURL14617 = process.env.VCAP_URL14617 || 'https://somesv14617.example.com/getData';
const EXT_SVCURL23079 = process.env.VCAP_URL23079 || 'https://somesv23079.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24780</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));