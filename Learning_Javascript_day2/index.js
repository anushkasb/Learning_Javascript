console.log('JS Loaded')
var countdown_timer=document.getElementById('countdown-timer');
console.log(countdown_timer.innerHTML);
var initial_value=countdown_timer.innerHTML;
var image=document.getElementById('bg-img');
console.log(image.src);


var interval=setInterval(function(){
   
    initial_value=initial_value>0? initial_value-1 :0;
    
    countdown_timer.innerHTML=initial_value;
     var image_path=countdown_timer.innerHTML%2===0?'./assets/IMG_20211212_134210.jpg' :' ./assets/IMG_20220624_181143.jpg';
     image.src=image_path;

     countdown_timer.style.fontSize=initial_value*100   + "px"  ;

     image.style.width=initial_value *10 + "%";
     if(initial_value<=0){

        clearInterval(interval);
     }
},1000);
