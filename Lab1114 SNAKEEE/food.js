function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    noStroke();
    fill(255, 0, 255);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}
