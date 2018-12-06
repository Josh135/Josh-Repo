var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;

function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(121, 139, 19);
  loadSnake();
  loadFood(1);
}

function draw(){
  background(0, 225, 225);
  snake.run();
  fill(0, 255, 25)
  textSize(30);
  text(score, 100, 100);
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  checkLoc();
  deadGame();
  gameStart();
  Score();
}

function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      score = score + 1

    }
  }
}

function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}

function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}

function keyPressed(){
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}

function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    loadSnake();
    gameStart();
  }
}

function gameStart(){
  if(start == "true"){
    textFont()
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 300)
    textSize(25);
    text("Press any button to start", 400, 550)
  }
}

function Score(){
  if (score > 19){
    fill(255, 200, 5);
    text("You're not awful", 400, 400);
  }
}
