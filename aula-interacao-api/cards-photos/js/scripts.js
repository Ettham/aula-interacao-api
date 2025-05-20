fetch("https://dog.ceo/api/breeds/image/random")
.then(Response => Response.json())
.then(dogs => {
    container.innerHTML =`<img src=${dogs.message}>`
})