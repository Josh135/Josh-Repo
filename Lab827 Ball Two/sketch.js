
 //  Global variables
var b1;
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadballs(30);
}

function draw() {
  for(i = 0; i < balls.length; i++) {
    balls[i].run();
  }
}

function loadballs(number) {
  for(var i = 0; i < number; i++) {
    var h = random(height);
    var w = random(width);
    var rad = random(15,45);
    var b = new Ball(w, h, rad, color(random(0,255), random(0,255), random(0,255)));
    balls.push(b);
  }

}
