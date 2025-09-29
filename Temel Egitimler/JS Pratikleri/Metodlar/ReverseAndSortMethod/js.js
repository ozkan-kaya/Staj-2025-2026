const names = ['can', 'tuba', 'elif', 'ozkan'];
names.sort().reverse();
console.log(names);


const points = [70,65,25,35,10,80,97];
// points.sort();
// console.log(points);
points.sort((a, b) => a - b);
console.log(points);


const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'ozkan', point: 100}
]

// students.sort((student1, student2) => {
//     if (student1.point > student2.point) {
//         return 1;
//     }
//     else if (student1.point < student2.point) {
//         return -1;
//     }
//     else return 0;
// });

students.sort((a,b) => a.point - b.point);

console.log(students);