console.log('Loaded!');

//change content
  var element=document.getElementById("main-text");
  element.innerHTML="new value";
  
//image move
var img=document.getElementById("modi");
var marginLeft=0;
function moveRight()
{
     marginLeft=marginLeft+10;
     img.style.marginLeft=marginLeft+"px";
}

img.onclick=function(){
    var interval=setInterval(moveRight,50);
   
};