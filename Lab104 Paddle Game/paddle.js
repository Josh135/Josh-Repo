function Paddle (loc, vel, width,length,col){
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;
  // This is the run function
  this.run = function(){ //FUNCTIONS to run all
    this.checkEdges();
    this.update();
    this.render();
  }
  // lerps the paddle
  // it adds speed
  this.update = function(){ //attraction
    paddleLength = width/2
      this.loc.x = lerp (this.loc.x, mouseX-paddleLength,.15);
    }

  //setting peramiters for the paddle
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // draws the paddle in a new location
  this.render = function(){
    //draws the paddle
    fill(55,255,50);
    rect(this.loc.x, this.loc.y, this.w, this.l);
  }

}
