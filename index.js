
var express = require('express');


var app = express();

var PORT = 3000;

// App listening on the below port
app.get('/' , (req, res) => {
    res.json({
        message : "hello wolrd"
    })
})

app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});