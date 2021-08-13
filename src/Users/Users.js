import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from "../services/user.axios";
import {User} from "../User/User";


export function Users(){

    let [users,setUsers] = useState([])
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        getUsers().then(({data})=>setUsers([...data]))
    },[])

     const postsOfUser = (id) => getPostOfUser(id).then(({data}) => setPosts(data))

    return(
    <div className={'main_wrap'}>

        <div className={'wrap_two'}> {
            users.map(value => <User item={value} key={value.id} postsOfUser={postsOfUser}/>
            )

        }</div>

        <div className={'wrap_one'}>
            {posts && posts.map(value => <div> {value.id} - {value.body}</div>)}
        </div>

    </div>
)}


