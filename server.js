var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.set('view engine', 'bulma');
app.use(express.static(__dirname + "/public"));

// routes
app.get("/", function(req, res){
    res.render("index");
    // res.status(err.status || 500);
    // res.json({
    //   message: err.message,
    //   error: err
    // });
})

app.listen(port, function(){
    console.log("app running")
})