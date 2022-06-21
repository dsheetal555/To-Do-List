const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/to-do-list'));

app.get('/*', function(req,res) {
res.sendFile(__dirname+
'/dist/to-do-list/index.html');
});

app.listen(process.env.PORT || 8080);