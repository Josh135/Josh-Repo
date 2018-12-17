function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    //color of food
    fill(255, 0, 0);
    //outline for food
    stroke(255);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(121, 139, 19);
  }

}
