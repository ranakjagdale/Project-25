class Paper{
    constructor(x,y,r){
      var  options= {
          isStatic: false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      
      //this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, r/2.8,options);  
      this.image = loadImage("paper.png");   
      World.add(world,this.body);
      this.r = r;
    }

    display(){
       var pos = this.body.position;  
      // fill("yellow");  
       //ellipseMode(RADIUS);
       //ellipse(pos.x, pos.y, 35,35);
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, this.r, this.r);
    }
}
