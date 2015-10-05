// Canvas kitöltése
function fillCanvas(){
    var canvas = document.querySelector( "#myCanvas" );
    var context = canvas.getContext( "2d" );
    context.fillStyle = "red";
    context.fillRect( 10,10,180,80 );
}

// Kitöltés indítása.
//fillCanvas()

//Kép kitöltése.
function fillImg(){
    var canvas = document.querySelector( "#myCanvas" );
    var context = canvas.getContext( "2d" );
    
    //Vonal rajzolása
    context.moveTo( 100,100 );
    context.lineTo( 300,100 );
    context.stroke();

    //Kör rajzolása
    context.beginPath();
    context.arc( 200,20,20,0,2*Math.PI);
    context.stroke();
    
    
    //var image = document.querySelector( "#myImg" );
    //context.drawImage( image, 0, 0 );
}

fillImg();