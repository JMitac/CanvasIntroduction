"use strick";
window.addEventListener("load",load);

function load() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var fps =  0;
    var imageObj = new Image();
    imageObj.src = 'http://cd1.dibujos.net/dibujos/pintados/2011008/9b6956528621eb4ad9be29f3eeb98610.png';

      
    

    var player = new Player({ contexto: ctx , image: imageObj});
    player.listenKeyBoardEvent();

    (function tick() {
        drawWorld();
        setTimeout( function() { tick(); }  , 1000/fps);
    })();

    function drawWorld() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.tick();
        player.draw();      
    }


}


    /*
	ctx.fillStyle = "brown";
	//fillRect(25,25,100,100) x=25 y=25 alto=100 ancho=100
	ctx.fillRect(25,25,100,100);
	//clearRecct es para limpiar
    //ctx.clearRect(45,45,60,60);
    //strokeRect es cuadro con el borde pintado
    ctx.strokeRect(50,50,50,50);

    ctx.beginPath();
    ctx.arc(175,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(210,75);
    ctx.arc(175,75,35,0,Math.PI,false);  // Mouth (clockwise)
    ctx.moveTo(165,65);
    ctx.arc(160,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(195,65);
    ctx.arc(190,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
    */

