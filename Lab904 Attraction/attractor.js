function Red(location, velocity, radius, col){
    var vel = createVector(0, random(-3,3));
    this.loc = location;
    this.vel = velocity;
    this.rad = radius;
    this.col = col;
    this.acc = createVector(0,.1);
    this.run = function(){
      this.checkEdges();
      this.update();
      this.render();
    }
    this.update = function(){
      this.loc.add(velocity)
     }
   this.checkEdges = function(){
         if(this.loc.y < 0) this.vel.y = -this.vel.y;
         if(this.loc.y > height) this.vel.y = -this.vel.y;
      }
   this.render = function(){
      fill(255, 0, 0);
      ellipse(400, 400, 50, 50);
   }
}
