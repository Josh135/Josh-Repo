//RGB values
//my variables
var Bars = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  numBars = 150;
  loadBars(numBars);
  bubbleSort(Bars);
}
//draw function
function draw() {
  background(255, 255, 255, 6000);
  noStroke();
  for(var i = 0; i < Bars.length; i++){
    Bars[i].run();
  }
}
//the peramiters and instructions of the color bars
function loadBars(numBars){
  for(var i = 0; i < numBars; i++){
    var w = 800/numBars;
    var h = 500;
    var loc = createVector(0+(w*i), 150);
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
    var clr = color(red, green, blue);
    var clrAvg = (green);
    var bar = new colorbar(loc, w, h, clr, clrAvg);
    Bars.push(bar);
  }
}
//the bubble sort techniqe to sort the colors
function bubbleSort(Bars) {
    var length = Bars.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
        var a = Bars[j].clrAvg;
        var b = Bars[j+1].clrAvg;
        if(a > b) {
          var temp = Bars[j];
          Bars[j] = Bars[j+1];
          Bars[j+1] = temp;
            }
        }
    }
}
