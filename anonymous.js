/* Complete. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).
*/

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(e) {
  var powered = Math.pow(e.x, 2) + Math.pow(e.y, 2);
  // console.log(powered);
  var sqrt = Math.sqrt(powered);
  // console.log(sqrt);
  return sqrt;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);