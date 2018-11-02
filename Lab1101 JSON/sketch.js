var data;
var barHeight;
var myArray;
//  preload a large file
function preload(){
  data = loadJSON("USSenators.json");
}
function setup(){
  myArray=data.objects;
   console.log(myArray[0].person.lastname);
}
function bubbleSort(txt) {
  var length = txt.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if(txt[j].person.lastname > txt[j+1].person.lastname) {
        var temp = txt[j].person.lastname;
        txt[j].person.lastname = txt[j+1].person.lastname;
        txt[j+1].person.lastname = temp;
      }
    }
  }
}
