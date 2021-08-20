import {useEffect, useState} from "react";
import {getUser} from "../Services/user-api";

export function UsersAPI(props){
    let{match:{params:{id}}} = props;
    let[user,setUser] = useState({})
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}))
    },[id])
    return(
        <div>
            <h1>{user.id} - {user.name}</h1>
            <p>{user.email} - {user.phone}</p>
        </div>
    )
}