var data;
var barHeight;
var txt;
//  preload a large file
function preload(){
  data = loadJSON("population.json");
}
function setup(){
  txt=data.objects;

}
function bubbleSort(txt) {
  var length = txt.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if(txt[j].countrydata.males > txt[j+1].countrydata.males) {
        var temp = txt[j];
        txt[j] = txt[j+1];
        txt[j+1] = temp;
      }
    }
  }
}
function draw(){
  bubbleSort(txt);
  console.log(txt);
}
