const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12796;
const EXT_SVCURL14254 = process.env.VCAP_URL14254 || 'https://somesv14254.example.com/getData';
const EXT_SVCURL27705 = process.env.VCAP_URL27705 || 'https://somesv27705.example.com/getData';
const EXT_SVCURL21046 = process.env.VCAP_URL21046 || 'https://somesv21046.example.com/getData';
const EXT_SVCURL12592 = process.env.VCAP_URL12592 || 'https://somesv12592.example.com/getData';
const EXT_SVCURL3840 = process.env.VCAP_URL3840 || 'https://somesv3840.example.com/getData';
const EXT_SVCURL18923 = process.env.VCAP_URL18923 || 'https://somesv18923.example.com/getData';
const EXT_SVCURL6632 = process.env.VCAP_URL6632 || 'https://somesv6632.example.com/getData';
const EXT_SVCURL14821 = process.env.VCAP_URL14821 || 'https://somesv14821.example.com/getData';
const EXT_SVCURL15702 = process.env.VCAP_URL15702 || 'https://somesv15702.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12796</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
