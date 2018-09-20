
function Ball(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, 0.5);

  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    if(this !== redBall){
      var d = this.loc.dist(redBall.loc);
      if(d > 300){
        var steeringForce = p5.Vector.sub(redBall.loc, this.loc);
        steeringForce.normalize();
        steeringForce.mult(5);
        this.vel.add(steeringForce);

      }
      if(d < 200){
        var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
        steeringForce.normalize();
        steeringForce.mult(5);
        this.vel.add(steeringForce);
      }
      this.loc.add(this.vel);

    }

  }
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
}//  end of constructor
