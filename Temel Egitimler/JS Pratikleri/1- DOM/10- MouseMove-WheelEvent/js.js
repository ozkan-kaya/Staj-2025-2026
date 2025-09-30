const kutu = document.querySelector('.kutu');

kutu.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    kutu.textContent = `${e.offsetX}x, ${e.offsetY}y`;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX + 'x', e.pageY + 'y');
})