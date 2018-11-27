var w = 20;
var cols, rows
var snake;
var food;

function setup(){
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;

  cnv.position((windowWidth-width)/2, 30);
  startNewGame();
}
function draw(){
  background(20, 20, 20);
  snake.run();
  food.run();
}

function keyPressed(){
  text(keyCode, 0, 0);
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1*w);
  }
  else if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1*w);
  }
  else if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1*w, 0);
  }
  else if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1*w, 0);
  }
}

function startNewRound(){
}

function startNewGame(){
  snake = new Snake(createVector(width/2, height/2), createVector(1, 0));
  food = new Food(createVector(random(0,400), color(0,0,255)));
  snake.tail = []
}
