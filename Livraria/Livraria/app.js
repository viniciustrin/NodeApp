//C:\Users\Vinicius\source\repos\NodeApp\Livraria\Livraria

var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));


var port = 5000;
app.listen(port, function (err) {
    console.log("app started at port: " + port);
});

app.get('/', function (req,res) {
});