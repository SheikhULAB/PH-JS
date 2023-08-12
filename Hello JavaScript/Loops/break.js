for(var i = 1; i <= 20; i++) {
    console.log(i); // 1 to 10
    if(i >= 10){
        break;
    }
}

var roastGiven = 0;

while(roastGiven < 10){
    console.log("roast den, gift item ansi"); //print 5 times
    roastGiven++;
    if(roastGiven > 4) {
        break;
    }
}


var items = ["bootle", "mouse", "sunglass", "pen","notebook"];

for(var i = 0; i < items.length; i++) {
    if(items[i] == "pen"){
        break;
    }
    console.log(items[i]); //bootle,mouse,sunglass
}

var numbers = [45, 87, 89, 56, 32, 51, 25];

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > 100) {//not true will not go inside
        break;
    }
    console.log(numbers[i]); // print all items
}