let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY= 0;

const ALTO_GATO= 40;
const ANCHO_GATO = 60;
const ALTO_COMIDA= 20;
const ANCHO_COMIDA= 20;

function graficarGato() {
    gatoX=(canvas.width / 2) - ( ANCHO_GATO / 2);
    gatoY=(canvas.height /2) - ( ALTO_COMIDA / 2);
    let colorG= "#F54927";
    graficarRectangulo=("gatoX, gatoY, ANCHO_GATO, ALTO_GATO, colorG");

}

function graficarComida() {
    let colorC= "#354034";
    graficarRectangulo=("comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, colorC");


}
function iniciarJuego(){
    graficarGato();
    graficarComida();

}
function graficarRectangulo(x,y, ancho, alto, color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y, ancho, alto);
    

}

