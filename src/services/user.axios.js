import axios from "axios";

let conFig = {
    baseURL:'https://jsonplaceholder.typicode.com/'
}
let axiosInstance =axios.create(conFig)

const getUsers = () => {
    return axiosInstance.get('users');
}
const getUser = (id) =>{};

// todo heandle request

const getPostOfUser = (userid) => {
    return axiosInstance.get(`users/${userid}/posts`)
}

const getCommentsOfUser = (userid) => {
    return axiosInstance.get(`posts/${userid}/comments`)
}

export {getUsers,getPostOfUser,getUser,getCommentsOfUser}