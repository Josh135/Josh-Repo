var data = [];
function preload(){
  data = loadJSON("population.json");
}

function setup() {
  //black screen is removed
  noCanvas();
  bubbleSort(data);
  console.log(data.countrydata)
}

function draw() {
}

function bubbleSort(data) {
    var length = data.length;
    //counts the number of passes
    for (var i = 0; i < length; i++) {
        //l is less than length
        for (var j = 0; j < (length - i - 1); j++) {
            //Cadjacent postions are paired
            var a = data[j].countrydata.country;
            var b = data[j+1].countrydata.country;
            if(data[j] > data[j+1]) {
                //numbers are swapped
                var temp = data[j];
                //replace the strings
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
}
