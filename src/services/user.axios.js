import axios from "axios";

let conFig = {
    baseURL:'https://jsonplaceholder.typicode.com/users'
}
let axiosInstance =axios.create(conFig)

const getUsers = () => {
    return axiosInstance.get();
}
const getUser = (id) =>{};

// todo heandle request

const getPostOfUser = (userid) => {
    return axiosInstance.get(`/${userid}/posts`)
}
export {getUsers,getPostOfUser,getUser}