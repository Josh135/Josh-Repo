
function Paddle(loc, rad, col){
  // Instance variables
  this.loc = loc;
  this.rad = rad;
  this.col = col;
  //this function calls other functions
  this.run = function(){
    this.update();
    this.render();
  }
  //This function changes the location of the ball
  //lerp the ball
  this.update = function(){
    var mouseLoc = createVector(mouseX, 500)
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .03)

  }

  //render() draws the ball at the new location
  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x, 500, 150, 20);
  }
}
