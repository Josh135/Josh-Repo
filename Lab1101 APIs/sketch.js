var data;
var barHeight;
//  preload a large file
function preload(){
  data = loadJSON("RickMorty.json");
}
function setup(){
   console.log(data.name);
}
