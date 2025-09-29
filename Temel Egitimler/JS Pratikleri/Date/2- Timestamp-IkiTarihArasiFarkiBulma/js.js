const startDate = new Date('09/15/2022 09:00:00');
const now = new Date();
console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
console.log(`Uni'ye ${mins} dk once basladim`);
const hours = Math.round(mins / 60);
console.log(`Uni'ye ${hours} saat once basladim`);
const days = Math.round( hours / 24);
console.log(`Uni'ye ${days} gun once basladim`);
const years = Math.round(days / 365);
console.log(`Uni'ye ${years} yil once basladim`);

const timestamp = startDate.getTime();
console.log(new Date(timestamp));