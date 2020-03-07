class Bar{
    constructor(x,y,w,h,c){
        this.x = x
        this.y =y
        this.w = w
        this.h = h
        this.c = c
    }

    draw(){
        fill(this.c)
        rect(this.x,this.y,this.w,this.h);
        this.keyPressed();
    }

    keyPressed(){
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
    }
}