var button = document.querySelector('section button');

button.addEventListener('click', function(){
         if(this.classList.toggle('button.active')){
         counter++;
     }else{
     counter--;}
document.querySelector("header div").innerHTML = counter;
   button.classList.toggle('active')

});
var download = document.querySelector('.download');

download.addEventListener('click', function(){
       if(this.classList.toggle('download2.active')){
         counter++;
     }else{
     counter--;}
document.querySelector("header p").innerHTML = counter;
   this.classList.toggle('active');
    });

var download2 = document.querySelectorAll('.download2');
for (var i= 0; i < download2.length; i++) {
download2[i].addEventListener('click', function(){
     if(this.classList.toggle('download2.active')){
         counter++;
     }else{
     counter--;}
document.querySelector("header p").innerHTML = counter;
   this.classList.toggle('active');
})}



var counter = 0;
var button2 = document.querySelectorAll('main article button');
for (var i= 0; i < button2.length; i++) {
button2[i].addEventListener('click', function(){
     if(this.classList.toggle('button.active')){
         counter++;
     }else{
     counter--;}
document.querySelector("header div").innerHTML = counter;
   this.classList.toggle('active');
})}

var zoeken = document.querySelector('nav ul');
zoeken.addEventListener('click', function(){
   zoeken.classList.toggle('active')
});

var klapuit = document.querySelector('ul li input');
klapuit.addEventListener('click', function(){
   klapuit.classList.toggle('active')
});

var vervaag = document.querySelector('body');
vervaag.addEventListener('click', function(){
   vervaag.classList.toggle('active')
});

