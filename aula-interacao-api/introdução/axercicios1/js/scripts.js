fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => Response.json())
.then(posts => {
    posts.map(post => console.log(post.title))
})