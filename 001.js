//
// Exercise 001
// Find the sum of all the multiples of 3 or 5 below 1000.
//

var sum = 0;
var numOfMatches = 0;

for(var i = 0; i < 1000; i++){
    if(i % 3 == 0 || i % 5 == 0){
        sum += i;
        numOfMatches++;
        console.log("sum updated by " + i + " to " + sum + ".");
    }
}

console.log("With " +numOfMatches + " matches, the final sum is ");
console.log(sum);
