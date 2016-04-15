var http = require('http'); /* expose http object to var http */
var url = require('url'); /* expose url object to var url */
var querystring = require('querystring'); 


/*
 * the callback function triggered when the server receives a request
 * */

var callback = function (req, res) { // req -> request object; res -> response object
  
  var query = url.parse(req.url).query;
  var spliturl = req.url.split("?");
  var route = spliturl[0];
  var params = querystring.parse(query);

  console.log(req.url);
  console.log(route);
  console.log(params);

  if(route === "/addNumbers"){ // if route is addNumbers
    var r = parseFloat(params.a) + parseFloat(params.b)
    res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
    res.end(r.toString()); // send response body
  }
  else if(route === "/greaterOf"){
     var a = parseFloat(a);
     var b = parseFloat(b);
     if(a > b){
      res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
      res.end(a.toString()); // send response body
     }
     else if( b > a){
      res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
      res.end(b.toString()); // send response body
     }
     else{
      res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
      res.end("they are equal"); // send response body
     }

  }
  else{ // if route is not in any of the above
    res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
    res.end("unidentified route"); // send response body
  }
}

var server = http.createServer(callback) // create an http server
var port = 1234
server.listen(port, "127.0.0.1"); // make server listen to port 1337

console.log('Server running at http://127.0.0.1:' + port + '/');
