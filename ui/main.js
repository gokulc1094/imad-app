console.log('Loaded!');

//change content
  var element=document.getElementById("main-text");
  element.innerHTML="new value";
  
//image move
var img=document.getElementById("modi");
img.onclick=function(){
    img.style.marginLeft="100px";
};