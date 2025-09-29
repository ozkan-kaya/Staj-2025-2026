const points = [70,65,25,35,10,80,97];

const arrayIndex = points.findIndex(point => point === 35);
points[arrayIndex] = 45;
console.log(points);

const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'ozkan', point: 100}
]

const objIndex = students.findIndex(student => student.name === 'ozkan');
students[objIndex].name = 'ozko';

console.log(students);