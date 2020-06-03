class Dustbin{
    
    constructor(){
        var box1,box2, box3;
        var options = {}    

        this.body = Bodies.rectangle(width/1.3-90, 650, 20, 80 , {isStatic:true} );
        World.add(world, this.body);

        this.body = Bodies.rectangle(width/1.3+90, 650, 20, 80 , {isStatic:true} );
        World.add(world, this.body);
        
        this.body   = Bodies.rectangle(width/1.3, 650, 160, 20 , {isStatic:true} );
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);

        
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y-55, 165, 90);
        rect(pos.x, pos.y, 160, 20);
    
        pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x-90, pos.y-40, 20, 100);
    
        pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x+90, pos.y-40, 20, 100);
    }
}