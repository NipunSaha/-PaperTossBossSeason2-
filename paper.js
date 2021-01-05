class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("pb.png");
        this.size = 80;
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill("white");
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.size,this.size);
        pop();
    }
}