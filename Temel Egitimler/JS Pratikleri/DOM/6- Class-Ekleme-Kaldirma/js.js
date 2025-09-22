const icerik = document.querySelector('p');
icerik.classList.add('test123');
console.log(icerik.classList);
icerik.classList.remove('error');
console.log(icerik.classList);

const pDegerleri = document.querySelectorAll('p');

pDegerleri.forEach(pDegeri => {
    if (pDegeri.textContent.includes('error')) {
        pDegeri.classList.add('error');
    }
    if (pDegeri.textContent.includes('success')) {
        pDegeri.classList.add('success');
    }
})