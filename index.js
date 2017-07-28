/**
 * Created by masood on 7/28/17.
 */
const express = require('express');
const app = express();

app.get('/',function(req,res) {
    //it doesn't send the collection. find the way to send it and the server thing is done!
    res.json(
    {
        userid: "2",
        message: "Hi!"
    },
    {
        userid: "1",
            message: "Hey, Hi!"
    },
    {
        userid: "2",
            message: "Good morning!"
    }
    );
});

app.listen(8080,function(){
    console.log('Example app listening on port 8080!')
});