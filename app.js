let express = require('express');
//const { route } = require('express/lib/application'); --> 이게 뭐지? 갑자기 생김
let app = express();
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.get('/template',function(req,res){
    res.render('temp',{time: Date(), _title:'PUG'});
});
app.get('/topic',function(req,res){
    let topics = [
        'javascript is ...',
        'nodejs is...',
        'express is...'
    ];
    let output =`
    <a href="/topic?id=0">Javasctipt</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    `
    res.send(output);
})
app.get('/',function(req, res){
    res.send('Hello home page');
}); //get과 같은 것들을 라우터라고 부르고 길을 찾아주는 역할(중개)
app.get('/dynamic', function(req, res){
    let lis='';
    for(let i=0; i<5; i++){
        lis = lis +'<li>coding</li>';
    }
    let time=Date();
   let output =`<!DOCTYPE html>
   <html>
       <head>
           <meta charset="utf-8"/>
       </head>
   <body>
       
           Hello Dynamic!
           <ul>
           ${lis}
            </ul>
            ${time}
   </body>
   </html>`;
    res.send(output);
});
app.get('/route',function(req,res){
    res.send('Hello Router, <img src="/하연생축배경.png">');
})
app.get('/login', function(req,res){
    res.send('<h1>please login</h1><h6>please join us</h6>');
});  
app.listen(3000,function(){
    console.log('connected 3000 port!');
});