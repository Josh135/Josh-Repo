/*Josh Peterson
Period 1
Lab Color S0rt*/
//the color bar function
function colorbar(loc, w, h, clr, clrAvg){
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.clr = clr;
  this.clrAvg = clrAvg;
//run the function
  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

}
