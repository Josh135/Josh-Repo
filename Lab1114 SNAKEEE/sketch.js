var w = 20;
var cols, rows
var snake;

function setup(){
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
