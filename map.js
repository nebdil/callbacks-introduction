/*
Implement your own version of the built-in array map function.

Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.
*/

function map(arr, func) {
  var newArr = [];
  arr.forEach(function(e) {
    var push = func(e);
    newArr.push(push);
  })
    console.log(newArr);
}

var words = ["ground", "control", "to", "major", "tom"];
map(words, function(word) {
  return word.length;
});