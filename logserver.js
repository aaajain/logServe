var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/logs', express.static('/home/ec2-user/foundations/DATA_UPLOAD/RJHSFoundations-DataUploadProject/RJHSFoundations_Utility/logs'), serveIndex('/home/ec2-user/foundations/DATA_UPLOAD/RJHSFoundations-DataUploadProject/RJHSFoundations_Utility/logs', {'icons': true}))

// Listen
app.listen(8011);
console.log('server listening in 8011');