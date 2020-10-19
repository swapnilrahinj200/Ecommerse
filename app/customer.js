var express=require('express');
var app=express();

var custumers=[
	      {id:100,"name":"cust1"},
              {id:101,"name":"cust2"}
	     ];
			  
app.get('/a',function(req,res){
    res.send(custumers);
})

app.listen('9000',function(){
    console.log('server started at 9000');
})

