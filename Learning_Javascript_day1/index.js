console.log('JS loaded');
var btn=document.getElementById('button-style');
var bg=document.getElementById('bg-img');




btn.onclick=function()
{
    bg.style.backgroundColor= "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+")"


alert("button clicked")
   
}