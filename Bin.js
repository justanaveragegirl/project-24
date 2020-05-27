class Bin{
    
    constructor(x, y,height,width) {
        var options = {
          'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x, y,height,width, options);
       
        
        World.add(world, this.body);
      }
        
 display() {
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, 0,0);
      pop();
}





}