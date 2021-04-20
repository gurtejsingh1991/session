var express =require('express');
var session=require('express-session');

var app=express();
app.use(express.urlencoded());
app.use(express.json);
app.use(session({
    secret:"usersession",
    saveuninitialized:true,
    resave:true,
}))
app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/login.html");

})
app.post('/profile',(res,res) => {
req.session.user=req.body.username;

if(req.session.user){
    res.writeHead(200,{'Content-type':'/text/html'});
    res.write("welcome"+req.session.user+"<br><a href="+'>logout'</a>);  
 res.end();   
}
})


app.listen(3000,(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is runing at http://localhost:3000")
    }
})