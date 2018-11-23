class Food extends Parent{
     constructor(x,y,width, height, image, numberoffoods){
        super(x,y,width, height, image);
        this.x = rand(cnv.width - foodWidth);
        this.y =  rand(cnv.height - foodHeight);
        
    }

    
}
for (let i = 0; i< numeroffoods; i++){ 
    foodArr.push(new Food (cnv.width/3, cnv.height/3, foodWidth, foodHeight,  foodImage))
} 
    
