/**
 * Created by masood on 7/28/17.
 */
const express = require('express');
const app = express();

app.get('/',function(req,res) {
    //it doesn't send the collection. find the way to send it and the server thing is done!
    res.json(
        [
            {"username":" Julia ","message":"Hi"},
            {"username":" Roth ","message":" Lo "},
            {"username":" Julia ","message":" L "},
            {"username":" Roth ","message":" Lorem ipsum "},
            {"username":" Julia ","message":" Lorem ipsum "},
            {"username":" Roth ","message":"OKAY!"},
            {"username":" Julia ","message":" Lorem ipsum dolo "},
            {"username":" Roth ","message":" Lorem i "},
            {"username":" Julia ","message":" Lorem ipsum dolor si "},
            {"username":" Roth ","message":" Lorem ipsum dolor sit amet, consectetuer ad "},
            {"username":" Julia ","message":" Lorem ipsum dolor sit amet, consectetuer adipis "},
            {"username":" Roth ","message":" Lorem ipsum dolor sit amet, consectetuer adipisci "},
            {"username":" Julia ","message":" Lorem ipsum dolor sit amet, consectetue "},
            {"username":" Roth ","message":" Lorem ipsum dolor sit amet, consectetuer a "},
            {"username":" Julia ","message":" Lorem ipsum dolor sit amet, consectet "},
            {"username":" Roth ","message":" Lorem ipsum dolor sit amet, consectetuer ad "},
            {"username":" Julia ","message":" Lorem ipsum dolor sit amet, consectetuer adipis "},
            {"username":" Roth ","message":" Lorem ipsum dolor sit amet, consectetuer adipisci "},
            {"username":" Roth ","message":"OKAY!"},
            {"username":" Julia ","message":"BYE!"}
        ]
    );
});

app.listen(8080,function(){
    console.log('Example app listening on port 8080!')
});