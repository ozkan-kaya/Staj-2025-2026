const username = '111ozkannn';
const pattern = /^[a-z]{6,10}$/;

let sonuc = pattern.test(username);
// console.log(sonuc);

if (sonuc) console.log('basarili');
else console.log('basarisiz');

sonuc = username.search(pattern);
console.log(sonuc);