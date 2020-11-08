class logs
{
    constructor(x, y, height, angle)
    {
        var options={
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
        this.width = 20;
        this.height = height;
       
      
      }

      display()
      {   
          var ro = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(ro);
          fill("brown");
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
      }
}