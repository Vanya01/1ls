function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}


function getComments(){
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
}


function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())

}

export {getPosts,getComments,getUsers}