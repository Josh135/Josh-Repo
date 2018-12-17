var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
var score = 0;
var w;
//setup function for code
function setup(){
  textAlign(CENTER, CENTER);
  frameRate(15);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(121, 139, 19);
  loadSnake();
  loadFood(1);
}
//draw function
function draw(){
  //color of background
  background(0, 225, 225);

  fill(random(225), random(255), random(250));
  snake.run();
  textSize(30);
  //location of score
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
      //splices food(gets rid of food and puts it in new location)
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      score = score + 1

    }
  }
}
//snake function
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//food function
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    //random location
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
//directions I move with arrow keys
function keyPressed(){
  start = "false"
  //up arrow key
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  //down arrow key
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  //right arrow key
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  //left arrow key
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
//what happens when i die
function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    //game over text
    text("You're kinda not too great at life", 400, 400);
    loadSnake();
    gameStart();
    gameOver();
  }
}
//when game starts
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
//score code
function Score(){
  if (score > 19){
    fill(255, 200, 5);
    text("You're not awful", 400, 400);
  }
}
