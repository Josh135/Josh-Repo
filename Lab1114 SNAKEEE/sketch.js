//  Global variables
var scl = 20;
var snake;
var food;
var score = 0;

function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(10);
}

function draw() {
  background(0, 0, 0);
  text(score , 50, 50);
  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
  Score();

  if(location.x < 0){
    this.dead = true
  }
}

function Score(){
  if (score > 15){
    fill(255, 0, 255)
    text("trash bro", 400, 400);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}

function dead() {
  if(this.dead = true)
  snake.vel = 0

  rect(200,200,200)
  fill(0, 255, 255)
  text("bro why u bad main")
}
