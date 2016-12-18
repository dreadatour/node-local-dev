'use strict';

var express = require('express'),
    proxy = require('http-proxy-middleware'),
    argv = require('yargs')
		.usage("Usage: $0 --api='https://domain.tld/' --port=3000")
		.default('port', 3000)
		.argv;

var apiProxy = proxy({target: argv.api, changeOrigin: true});
var app = express();
app.use('/api', apiProxy);
app.use('/', express.static(__dirname));
app.listen(argv.port);
