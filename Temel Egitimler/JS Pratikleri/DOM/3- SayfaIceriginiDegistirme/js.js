// const pDegeri = document.querySelector('p');
// console.log(pDegeri.innerText);
//
// pDegeri.innerText = 'Ozkan kaya fullstack training';


// const pDegeri = document.querySelectorAll('p');
//
// pDegeri.forEach(p => {
//     console.log(p.innerText);
//     p.innerText += ' eski deger. [yeni deger]';
// })


const icerik = document.querySelector('.icerik');
console.log(icerik);

icerik.innerHTML += '<h2>Vue JS, React JS, Angilar JS</h2>';

const ogrenciler = ['can','ozkan','ayse'];
ogrenciler.forEach(ogrenci => {
    icerik.innerHTML += `<p>${ogrenci}</p>`;
})