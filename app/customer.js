var express=require('express');
var app=express();

var products=([{id:100,"name":"cat1"},
              {id:101,"name":"cat2"}
			 ]);
			  
app.get('/a',function(req,res){
    res.send(products);
})

app.listen('9000',function(){
    console.log('server started at 9000');
})

