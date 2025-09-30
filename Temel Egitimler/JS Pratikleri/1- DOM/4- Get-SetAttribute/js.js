const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.innerText = 'W3Schools';
link.setAttribute('href', 'https://www.w3schools.com/');

const pDegeri = document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class', 'yeniIcerik')
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('style', 'color: blueviolet;')