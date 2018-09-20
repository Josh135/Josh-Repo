//  Global variables
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(12);  //  !!!!!!!!!!  this is a function call
}

function draw() {
  background(20,20,20, 22);
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run()
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(20,40);
        var col = color(random(255), random(255), random(255));
        var b = new Ball(loc, vel, radius, col);
        balls.push(b);

    }
    console.log(balls);
}
