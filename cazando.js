let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function iniciarJuego(){
    graficarGato();
    graficarComida();

}
function graficarGato() {
    ctx.fillStyle="blue";
    ctx.fillRect(canvas.width/4,canvas.height/3,canvas.width*20/40,canvas.height*4/20);

}

function graficarComida() {
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,100,50);

}
