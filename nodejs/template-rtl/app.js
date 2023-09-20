const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const routes = require('./server/routes/router.js');
const fs = require("fs");
var https = require("https");
const ejs = require("ejs").__express;

require('dotenv').config('config.env')

const app = express();
const port = process.env.PORT || 4000;

require('dotenv').config();

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);

app.set('layout', './layouts/index');
app.set('view engine', 'ejs')
app.engine('ejs', ejs);
app.use('/', routes);

// For Deployment use

// https
//   .createServer(
//     {
//       key: fs.readFileSync("sslcert/ssl.key"),
//       cert: fs.readFileSync("sslcert/ssl.cert"),
//     },
//     app
//   )
//   .listen(port, function () {
//     console.log(
//       "Server is up and running on port number " + port + " for Https"
//     );
//   });
  
// For Development use 

app.listen(port, () => console.log(`server is running on ${port}`))
