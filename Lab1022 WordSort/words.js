function setup(){
  noCanvas();
  var txt = []
  txt = loadStrings("words.txt");
}
function draw() {
  bubbleSort(txt);
}

console.log(txt);
function bubbleSort(txt) {
  var length = txt.length;
  //the amount of passes
  for (var i = 0; 1 < length; i++) {
    // j < length
    for (var j = 0; j < (length - i - 1); j++) {

      
