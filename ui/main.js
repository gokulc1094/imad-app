//counter
var counter=0;
var button =document.getElementById("button");
button.onClick=function(){
    //render 
    
    counter=counter+1;
    var span=document.getElementById("count");
    span.InnerHTML=counter.toString();
};