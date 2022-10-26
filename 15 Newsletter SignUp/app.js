const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');
const https=require('https');

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/signup.html');
});

app.post('/failure',function(req,res){
    res.redirect('/');
});

app.post('/',function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var data={
        members:[{
            email_address:email,
            status:'subscribed',
            merge_fields:{
                FNAME:fname,
                LNAME:lname
            }
        }]
    };
    var jsonData=JSON.stringify(data);

    const url='https://us14.api.mailchimp.com/3.0/lists/8cdff100d6';
    const options={
        method:"POST",
        auth:"bali1:455dcbdc8c30726e1c3b5f5c1334c0bc-us14"
    };
    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+'/success.html');
        }else{
            res.sendFile(__dirname+'/failure.html');
        }
        response.on('data',function(data){
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

app.listen(process.env.PORT || 3000,function(){
    console.log('listening at 3000');
});

// 455dcbdc8c30726e1c3b5f5c1334c0bc-us14
// 8cdff100d6