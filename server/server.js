var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyparser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () =>{
    console.log('Started on port 3000');
    });





