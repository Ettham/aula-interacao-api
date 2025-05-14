fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(users => {
    users.map(user => console.log(user.name))
})