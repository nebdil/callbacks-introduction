var arr = [1, 2, 5, 9, 10];

function compare(a, b) {
return a - b;
}

function sorting(arr) {
  console.log(arr.sort(compare));
}

sorting(arr);
