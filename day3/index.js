var audio_A= new Audio('clap.wav');
var audio_S=new Audio('hihat.wav');
var audio_D = new Audio('kick.wav');

var audio_F=new Audio('openhat.wav');
var audio_G=new Audio('boom.wav');

var audio_H=new Audio('ride.wav')
var audio_J=new Audio('snare.wav')

var audio_K=new Audio('tom.wav')
var audio_L=new Audio('tink.wav');

document.body.addEventListener('keydown',function(event){
var keyCode=event.keyCode;
if(keyCode===65)
{
audio_A.play();
console.log('a is pressed')
}
if(keyCode===83)
{
   audio_S.play();
}
if(keyCode===68)
{
    audio_D
}
if(keyCode===70)
{
    audio_F.play();
}
if(keyCode===71)
{
   audio_G.play();
}
if(keyCode===72)
{
    audio_H.play();
}
if(keyCode===74)
{
    audio_J.play();
}
if(keyCode===75)
{
    audio_K.play()
}
if(keyCode===76)
{
    audio_L.play();
}
})