//C:\Users\Vinicius\source\repos\NodeApp\Livraria\Livraria

var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

var port = 5000;
app.listen(port, function (err) {
    console.log("app started at port: " + port);
});

app.get('/', function (req, res) {
    res.render('index', { title: 'hello from render', list: ['a', 'b'] });
});