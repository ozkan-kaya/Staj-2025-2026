const variable = [
    {"hobby": "swimming", "person": "ozk"},
    {"hobby": "playing card", "person": "ozk"},
    {"hobby": "take a trip", "person": "ozk"}
];

// console.log(JSON.stringify(variable));

localStorage.setItem('todos', JSON.stringify(variable));
const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));
