const correctAnswers = ['8','10','3','25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })

    // console.log(score);

    result.classList.remove('d-none');

    let puan = 0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}% `;
        if (puan === score)
            clearInterval(bastir);
        else
            puan++;
    },10)
})

// setTimeout(() => {
//     console.log('ozk')
// }, 2000);

// setInterval(() => {
//     console.log('ozk')
// }, 2000);

// let i = 0;
// const yazdir = setInterval(() => {
//     console.log('ozk');
//     i++;
//     if (i === 5) {
//         clearInterval(yazdir);
//     }
// }, 1000);