const fs=require('fs');
const express=require('express');
const app=express();
app.get('/',function(req,res){

    res.sendFile('D:/Works_Space/Repos/Web-Development/Games/TheSimonGame/index.html');
});
app.listen(3000,function(){
    console.log('server started at port:3000');
    
});