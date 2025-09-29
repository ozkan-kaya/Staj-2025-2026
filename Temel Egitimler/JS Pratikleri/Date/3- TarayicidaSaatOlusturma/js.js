const clock = document.querySelector('.clock');

const appendZero = (num) => {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

const tick = () => {
    const now = new Date();
    const hours = appendZero(now.getHours().toString());
    const mins = appendZero(now.getMinutes().toString());
    const seconds = appendZero(now.getSeconds().toString());

    const html =
        `
        <span>${hours}</span> :
        <span>${mins}</span> :
        <span>${seconds}</span>
`;

    clock.innerHTML = html;
};

setInterval(tick, 1000);