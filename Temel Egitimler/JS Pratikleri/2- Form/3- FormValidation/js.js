const form = document.querySelector('form');
const message = document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) message.textContent = 'basarili';

    else message.textContent = 'Tum harfler kucuk harf ve 6-10 karakter arasinda giriniz.';
})

form.username.addEventListener('keyup', (e) => {
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        // console.log('basarili');
        form.username.setAttribute('class', 'success');
    }
    else {
        // console.log('basarisiz');
        form.username.setAttribute('class', 'error');
    }
})