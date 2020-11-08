class pigs
{
    constructor(x, y, width, height)
    {
        var options={
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
       
      
      }

      display()
      {   
          var ro = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(ro);
          fill("green");
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
      }
}