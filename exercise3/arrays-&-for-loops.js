var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

fruitArray[1] = "tomato";

console.log(fruitArray);

for(var fruit of fruitArray){
    if(fruit === "tomato"){
        console.log("whats a tomato doing here?")    
    } else {
        console.log(fruit)
    }
}
