function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(255, 0, 0);
    stroke(255);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(121, 139, 19);
  }

}
