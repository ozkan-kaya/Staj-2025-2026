const getTodos = async () => {
    let response = await fetch('example/ozk.json');

    if (response.status !== 200)
        throw new Error('Dogru endpointe istek atmadiniz');

    const data = await response.json();
    return data;
}

getTodos()
    .then(response => console.log(response))
    .catch(err => console.log(err.message));