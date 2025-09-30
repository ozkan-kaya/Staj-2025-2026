const students = [
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
    {name: 'ozkan', point: 100},
    {name: 'hakan', point: 45},
    {name: 'deniz', point: 70}
];

const newNotes = students.filter(student => student.point < 50)
    .map(student => {
        return `${student.name} adli ogreninin yeni notu ${student.point + 15}`
    });

console.log(newNotes);
