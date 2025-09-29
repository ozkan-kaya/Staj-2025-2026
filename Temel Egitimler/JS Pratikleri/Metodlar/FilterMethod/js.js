const points = [70,75,25,35,10,80,27];

const studentsPassed = points.filter(point => point > 50) //KISA YAZIM SEKLI

console.log(studentsPassed);

const students = [
    {name: 'can', passed: true},
    {name: 'tuba', passed: false},
    {name: 'elif', passed: false},
    {name: 'ozkan', passed: true}
]

const studentsPassedTest = students.filter(student => {
    return student.passed;
})

console.log(studentsPassedTest);