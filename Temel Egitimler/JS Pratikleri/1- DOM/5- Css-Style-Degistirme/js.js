const baslik = document.querySelector('h1');

// baslik.setAttribute('style', 'padding: 50px;');
// bu yontem eski stylelari silip sonuncuyu yazdigi icin asagidaki yontemi uygulamamiz gerekir

console.log(baslik.style);

baslik.style.padding = '50px';
baslik.style.fontSize = '60px';
baslik.style.fontWeight = '100';