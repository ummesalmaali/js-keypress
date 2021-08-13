document.addEventListener("keypress",function(event){

var text = event.key
document.querySelector("p").innerHTML = "you have pressed " + text;


})