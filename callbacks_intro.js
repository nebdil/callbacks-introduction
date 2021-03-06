// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(index) {
//   console.log("Found Waldo at the index " + index + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//////////

function findWaldo(arr, found) {
  arr.forEach(function(e, i) {
    if (e === "Waldo") {
      found(i);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at the index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


