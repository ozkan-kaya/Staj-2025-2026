const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            // console.log('basarili cevap alinamadi.')
            callback('Basarili cevap alinamadi', undefined);
        }
    });

    request.open("GET", resource);
    request.send();
}

getTodos('example/ozk.json', (err, data) => {
        console.log(data);

    getTodos('example/asd.json', (err, data) => {
        console.log(data);
    });

    getTodos('example/qwe.json', (err, data) => {
        console.log(data);
    });
});