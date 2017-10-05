var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function name(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function age(a, b) {
  return a.age - b.age;
}

function byName() {
  console.log(students.sort(name));
}

function sorting() {
  byName();
  students.forEach(function(e, i) {
    if(e.name === e.name[i]) {
      name(e.name, e.name[i]);
    }
  })
  }
sorting();




