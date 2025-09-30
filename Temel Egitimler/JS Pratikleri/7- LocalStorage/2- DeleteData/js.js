localStorage.setItem('name', 'ozkan');
localStorage.setItem('age', 1);

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// localStorage.removeItem('name');
localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);