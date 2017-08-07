//counter
var button =document.getElementById('button');


button.onclick=function(){
    
    //create or make an an http request
      var request=new XMLHttpRequest();
    
    //recive response and respond
     request.onreadystatechange=function(){
         
         if(request.readyState===XMLHttpRequest.DONE)
         {
              if(request.status===200)
              {
                   var counter=request.responseText;
                   var span=document.getElementById('count');
                   span.innerHTML=counter.toString();

              }
         }
         
         
     };
     
     //make the request
     
     request.open('GET','http://gokulc1094.imad.hasura-app.io/counter',true);
     request.send(null);
};
    //name request
    
    
  var nameInput=document.getElementById('name');
 
  submit.onclick=function(){
      
       //create or make an an http request
      var request=new XMLHttpRequest();
    
    //recive response and respond
     request.onreadystatechange=function()
     {
        if(request.readyState===XMLHttpRequest.DONE)
         {
              if(request.status===200)
              {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                 {
                   list+='<li>'+names[i]+'</li>';
                 }
  
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;


              }
         }
 
 
  };
  
  
   var name=nameInput.value;
  var submit=document.getElementById('submit-btn');  
    request.open('GET','http://gokulc1094.imad.hasura-app.io/submit-name'+name,true);
     request.send(null);
    //render 
    
  };