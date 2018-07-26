var express    = require('express')
var serveIndex = require('serve-index')
var fixed = require('./Constants.js');

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory

app.use('/logs', express.static(fixed.jbpmLogPath), serveIndex(fixed.jbpmLogPath, {'icons': true}))

// Listen
app.listen(8012);
console.log('server listening in 8012');