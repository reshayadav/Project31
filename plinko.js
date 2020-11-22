class Plinko{
    constructor(x,y,r){

        var options={
          isStatic :true
        }

        this.r =r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
      
        push ();
        fill (255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop ();
    }
}