var rows = 7;
var cols = 12;
var blocks = [];
for(var i=0; i<rows; i++) {
    blocks[i] = [];
    for(var j=0; j<cols; j++) {
        blocks[i][j] = undefined;
    }
}

let bar;
let ball;
function setup(){
    //Crear bloques
    blockW = windowWidth/cols;
    blockH = windowHeight/17;
    createCanvas(windowWidth, windowHeight);
    for (i=0; i<rows; i++){
        let color;
        switch(i){
            case 0:
                color = 'red';
                break;
            case 1:
                color = 'orange';
                break;
            case 2:
                color = 'yellow';
                break;
            case 3:
                color = 'green';
                break;
            case 4:
                color = 'blue';
                break;
            case 5:
                color = 'indigo';
                break;
            case 6:
                color = 'violet';
                break;
            default:
                color = 'black';
                
        }
        for(j=0; j<cols; j++){
            blocks[i][j] = new Block(j*blockW, (i+3)*blockH, blockW, blockH,color);
        }
    }

    //Crear barra
    const barW = 150;
    const barH = 25;
    const barX = (windowWidth/2)-(barW/2);
    const barY = windowHeight-barH-10;
    bar = new Bar(barX,barY,barW,barH,'black');
    
    //Crear circulo
    const d = 30;
    const ballX = (windowWidth/2);
    const ballY = barY-(d/2);
    ball = new Ball(ballX,ballY,d,'grey',10);
}
var cont=0;

function draw(){
    background('white');
    for(var i=0; i<rows; i++) {
        for(var j=0; j<cols; j++) {
            blocks[i][j].draw();
            if(blocks[i][j].colision(ball)== true){
                blocks[i][j] = null;
            }
        }
    }
    bar.draw();
    //keyPressed();
    ball.draw();
    console.log(bar.x);
}

/*function keyPressed(){
	if (keyIsDown(RIGHT_ARROW)) {
        //this.y-=velocidad;
        //bar.x = bar.x < windowWidth ? bar.x++: bar.x = bar.x;
        if(bar.x<windowWidth){
            bar.x++;
        }
    } else if (keyIsDown(LEFT_ARROW)) {
        //bar.x = bar.x > 0 ? bar.x--: bar.x = bar.x;
        if(bar.x>0){
            bar.x--;
        }
    }
    //console.log(bar.x);
}*/