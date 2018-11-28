function Food(loc){
//location of food
  this.loc = loc;
//the run function for the food
  this.run = function(){
    this.render();
  }

  this.render = function(){
    noStroke();
    fill(255, 0, 0);
    //perameters for the piece of food
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
