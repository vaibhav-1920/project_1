var h = require('http');
var u = require('url');
var fs = require('fs');
var server = h.createServer(function(req,res){
   res.writeHead(200,{'content-type':'text/html'});   
   if(req.url=='/favicon.ico')
             return;
	fs.readFile('log.txt',function(err,data) {
      res.writeHead(200,{'content-type':'text/html'});  
	   if(!err)
	   {    
		r=new Date();
                
      res.write(`<h1>log generated </h1>`);
                fs.appendFile('log.txt',""+r,function(err1)
                { 
                 if(!err1)
                 console.log("writing success")
                });
		
	 		
	   }
      res.end();		
       });
       
		
});
server.listen(9000,function() {console.log("SERVER STARTED")});