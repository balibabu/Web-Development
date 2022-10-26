const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(request,response){
    console.log(request);
    response.sendFile(__dirname+'/index.html');
});

app.post('/',function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    res.send('sum is '+(num1+num2));
});

app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/bmicalculator',function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    res.send('Your BMI is '+Math.round(weight/Math.pow(height,2)));
});

app.listen(3000,function(){
    console.log('listening at port 3000');
});