myCanvas=document.getElementById ("myCanvas");
ctx = myCanvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

myCanvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mousex = e.clientX - myCanvas.offsetLeft;
    mousey = e.clientY - myCanvas.offsetTop;
    circle(mousex,mousey);
}
function circle(x,y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}