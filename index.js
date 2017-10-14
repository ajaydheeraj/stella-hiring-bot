var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

var template = $('#template').html();
 // You can pass dynamic template values
  var rendered = Mustache.render(template, {name: "Luke"});
  $('#target').html($(<iframe src='https://webchat.botframework.com/embed/stellaHiring?s=SMG_TqAHgsw.cwA.FC0.XRvC71_cB23d6VtayQH7v3tE9T3HzNYGUowXWE5JDDY' height="400"></iframe>));