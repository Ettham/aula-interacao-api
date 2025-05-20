fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(user => {
    const container = document.querySelector("#container")
    const usuarios = user.map(item =>{
        return ` 
        <div class="usuarios">
            <img src="https://placehold.co/600x400" alt=${item.id}/>
            <h2>${item.name}</h2>
            <p>username :${item.username}</p>
            <p>email :${item.email}</p>
            <p>zipcode :${item.address.zipcode}</p>
            <p>website :${item.website}</p>
            <p>company :${item.company.name}</p>
            <p>endereço :${item.address.city}</p>


        </div>
        `
    })
    container.innerHTML = usuarios.join("")
})