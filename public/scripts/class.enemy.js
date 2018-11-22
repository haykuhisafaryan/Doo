class Enemy extends Parent{
     constructor(x,y,width, height, image, numberofenemies){
        super(x,y,width, height, image);
        this.xDelta = 10;
        this.yDelta = 10;
        
    }

    update(){
        this.move();
    }

    move(){
        if (this.x < 0 || this.x > cnv.width - this.width) {
                this.xDelta *= -1
            }

            if (this.y < 0 || this.y > cnv.height - this.height) {
                this.yDelta *= -1
            }
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    
}
for (let i = 0; i< numerofenemies; i++){ 
    enemyArr.push(new Enemy (cnv.width/2, cnv.height/2, enemyWidth, enemyHeight, enemyImage))
} 
