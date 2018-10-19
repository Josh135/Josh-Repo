var balls = [];
//var chaser;
var mouseLoc;
var paddle
var score = 0
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 0, 50);
  paddle = new Paddle (createVector (width/2,height/2), createVector (-.1,.1), 200,15, color(255,0,255)); //creates paddle

   loadBalls(50);
}

//creates the balls and loads them
function loadBalls (numBalls){
  balls = [];
  for (var i = 0; i < numBalls; i++){
    var loc = createVector(random(0,800), 20);
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = 25;
    var col = color(random(0,255), random(0,255), random(0,255));
	var ball = new Ball (loc, vel,rad, col);
	balls.push(ball);
  }
}
//  draw function
function draw() {
background(20,20,20);
noStroke (); //gets rid of the outline
text(score, 200, 200);
paddle.run ();
for (var i = 0; i < balls.length; i++){
  balls[i].run();
  //the balls can bounce
  var ballA = balls[i];
  var y = ballA.loc.y;
  var x = ballA.loc.x;
  var distY = abs (paddle.loc.y- y);
  //checks the distance
//  sets peramiters for all of the edges
    var lowerEdge = paddle.loc.y + paddle.l ;//lower
    var upperEdge = paddle.loc.y //upper
    var lEdge = paddle.loc.x ; // left edge
    var rEdge = paddle.loc.x + paddle.w ; //right edge

    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y > 0)){
      //check is the values are between edges
      balls.splice(i,1);
      score = score + 1
    } // sets the boundaries for the game
    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y < 0)){
      //adds more balls each time
      var numBalls = balls.length + 30;
      balls = [];
      loadBalls(numBalls);
      for (var i = 0; i < balls.length; i++){
        balls[i].run()
      }
    }
    //score code: this is how the game ends
    if (score===60){
      fill(50, 50, 255)
      textSize(40);
      text("You win loser", 400, 400);
      balls=[];
      loadballs(0);
    }
}
}
