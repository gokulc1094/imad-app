var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function (req,res){
   counter=counter+1;
   res.send(counter.toString());
});


var articles={
     'article-one':{
    title:"article one..webb",
    heading:"article one",
    date:"aug 3 2017",
    content:` <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>`
},
     'article-two':{
    
     title:"article two..webb",
    heading:"article two",
    date:"aug 6 2017",
    content:` <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>`
    
},
     'article-three':{
    
    
     title:"article three..webb",
    heading:"article three",
    date:"aug 9 2017",
    content:` <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkc
    </p>
     <p>
        
        These arte the contents of article oneeee..djvnndnvndndkm, kcvmklmxlvklv,cv Vc
        cvlmkmklvmc
        vbknmcxlkvc
    </p>`
},
};

 function createtemplate(data)
 {
     var title=data.title;
     var heading=data.heading;
     var date=data.date;
     var content=data.content;
     var htmltemplate=`
                 <html>
                <head>
                    <title>${title}</title>
                    <meta name="viewport" content="width=device-width,intial-scale=1"/>
                    <link href="/ui/style.css" rel="stylesheet" />
                    
                    
                </head>
                <body>
                    
                    
                    <div class ="container">
                        <div>
                        <a href='/'>home</a>
                        </div>
                        <div>
                        <h4>${heading}</h4>
                        
                        </div>
                        <div>
                        <p>
                        ${date}
                        </p>
                       ${content}
                          </div>    
                        </div>
                </body>   
                </html>

`;
return htmltemplate;
}






app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
 res.send(createtemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names;
app.get('/submit-name/:name',function(req,res){
   var name=req.params.name ;
   names.push(name);
   res.send(JSON.stringyfy(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
