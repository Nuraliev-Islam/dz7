let root = document.getElementById('root');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((data)=>{
    data.forEach(item => {
        root.innerHTML += `
        <br>
        <br>
        <h1>Name:${item.name}</h1>
        <p>Username:${item.username}</p>
        <p>Email:${item.email}<p>
        <p>ID:${item.id}<p>
        <hr>
        `
    });
})