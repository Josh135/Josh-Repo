function Food() {
  this.vec =randomVector().mult(w);

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }

  this.draw = function() {
    fill(255, 255, 255);
    rect(this.x(), this.y(), w, w);
  }

  this.eaten = function() {
    this.vec = randomVector().mult(w);
  }
}
