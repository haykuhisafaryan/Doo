class Player extends Parent{
    constructor(x,y,width, height, image, name){
        super(x,y,width, height, image);
        this.xDelta = 0;
        this.yDelta = 0;
        this.name = name;
    }

    update(){
        this.move();
    }

    move(){
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
}

player = new Player(cnv.width/2, cnv.height/2, playerWidth, playerHeight, playerImage, prompt("enteryour name"));