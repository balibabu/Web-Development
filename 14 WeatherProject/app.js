const express=require('express');
const https=require('https');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    
});

app.post('/',function(req,res){
    var cityName=req.body.cityName;
    var url='https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=7ee2c515dc46284a0eee620191317d9b&units=metric'; 
    https.get(url,function(response){
    console.log(response.statusCode);
    response.on('data',function(data){
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp_max
        var weatherDescr=weatherData.weather[0].description
        var icon=weatherData.weather[0].icon
        var imgUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        console.log('max temp is '+temp);
        res.write('<p>weather description: '+weatherDescr+'</p>');
        res.write('<h1>max temp in '+cityName+' is '+temp+' deg celcius</h1>');
        res.write('<img src='+imgUrl+'>');            
        res.send();
    });
});   
});

app.listen(3000,function(){
    console.log('server running...');
});