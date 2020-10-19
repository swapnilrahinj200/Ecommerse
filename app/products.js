var express=require('express');
var app=express();

var products=([{id:100,"name":"myprod"},
              {id:101,"name":"myprod2"}
			 ]);
			  
app.get('/a',function(req,res){
    res.send(products);
})

app.listen('8000',function(){
    console.log('server started at 8000');
})

