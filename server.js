/**
 * Created by codeforcoffee on 5/21/2015.
 */

var app = app || {};

// require modules
app.http = require('http'); // module: http
app.express = require('express'); // module: express

// load a fake no-sql database as json
app.fakeDatabase = fs.readFile('/db/no-sql.json', function(err, contents) {
    console.log(contents);
});

// load our settings file when needed
app.settings = fs.readFile('/package.json', function(err, contents) {
    console.log(contents);
});

app.createServer(function(request, response) {
   response.writeHead(200); // we're writing the status code here - like 404, 200, etc
   // write() outsputs a response body of whatever we send
   response.write(app.fakeDatabase); // output our fake no-sql database contents
   resonse.end(); // close connection
}).list(8080); // listen for requests made to this port (localhost:8080)

console.log("Tasker Server - listening on localhost:8080");