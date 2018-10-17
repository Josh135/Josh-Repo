//  Global variables
var balls = [];
var paddle
// seting up project
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(random(20,250), random(20,250), random(20,250)); // draws canvas
  loadBalls(2);  // loads balls
  paddle = new Paddle(createVector(0, 0),
                      33,
                      color(random(255), random(255), random(255)))
}
//
function draw() {
  background(0,0,0);
  paddle.run();
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run()
  }
  //getting rid of the boids
  var a = balls[i]
  var x = a.loc.x
  var y = a.loc.y
  for (var i = balls.length - 1; i >= 0; i--){
    if(paddle.loc.x < x
      && x < paddle.loc.x+w
      && y < paddle.loc.y)
    {
      balls.splice(i, 1);

  }
 }
}
//loading the balls
function loadBalls(numBalls){
//creating the balls
    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(100, 200));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(30,30);
        var col = color(random(255), random(255), random(255));
        var b = new Ball(loc, vel, radius, col);
        balls.push(b);

    }
    console.log(balls);
}
