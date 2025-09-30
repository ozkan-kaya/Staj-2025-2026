const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject('Basarili cevap alinamadi');
            }
        });

        request.open("GET", resource);
        request.send();
    })
}

getTodos('example/ozk.json').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

// const getIt = () => {
//     return new Promise((resolve, reject) => {
//         resolve('basarili data');
//         reject('basarisiz istek');
//     })
// }
//
// getIt()
//     .then(data => {
//     console.log('basarili:', data);
// })
//     .catch(err => {
//     console.log('basarisiz:', err)
// })