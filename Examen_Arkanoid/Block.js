class Block{
    constructor(x,y,w,h,c){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
    }

    draw (){
        //noStroke();
        fill(this.c);
        rect(this.x,this.y,this.w,this.h);
    }

    colision(Ball){
        var collide = false;
        if(
          (
            Ball.HitboxL>this.x
            && Ball.HitboxL < this.x+this.w
            && Ball.y > this.y
            && Ball.y < this.y+this.h
          )
          || 
          (
            Ball.HitboxR>this.x
            && Ball.HitboxR < this.x+this.w
            && Ball.y > this.y
            && Ball.y < this.y+this.h
          )
        ){
            collide = true
          if(sentidoX == true){
            console.log("to left")
            Ball.sentidoX = false
            // bola1.x-=velocidad;
          }else{
            console.log("to right")
            Ball.sentidoX = true
            // bola1.x+=velocidad;
          }
          console.log("bonk");
        }
        if( 
          (
            Ball.x>this.x
            && Ball.x < this.x+this.w
            && Ball.HitboxT > this.y
            && Ball.HitboxT < this.y+this.h
          )
          || 
          (
            Ball.x>this.x
            && Ball.x < this.x+this.w
            && Ball.HitboxB > this.y
            && Ball.HitboxB < this.y+this.h
          )
        ){
            collide = true;
            if(sentidoY == true){
                console.log("to left")
                Ball.sentidoY = false
                // bola1.x-=velocidad;
              }else{
                console.log("to right")
                Ball.sentidoY = true
                // bola1.x+=velocidad;
              }
              console.log("bonk");
        }
        return collide;
    }
}