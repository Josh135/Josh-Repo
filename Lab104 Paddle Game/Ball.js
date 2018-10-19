function Ball(loc, vel, rad, col){
  this.loc = loc;
 this.vel = vel;
   this.rad = rad;
   this.col = col;
 this.acc = createVector(0,.1);

 // calls other functions
 this.run = function(){
   this.checkEdges();
   this.update();
   this.render();
 }
 // the location is changed
 //  adds speed
  this.update = function(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.loc.mag();
    }



  //reverses the speed
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
   if(this.loc.x > width) this.vel.x = -this.vel.x;
   if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
 }

  // this draws the ball at a new and different location
 this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y,rad,rad);
 }
}
