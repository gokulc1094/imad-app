//counter
var button =document.getElementById('button');


button.onclick=function(){
    
    //create or make an an http request
      var request=new XMLHttpRequest();
    
    //recive response and respond
     request.onreadystatechange=function(){
         
         if(request.readystate===XMLHttpRequest.DONE)
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
    
    
    
    
    
    //render 
    
    