import {useEffect, useState} from "react";
import {getUser} from "../Services/user-api";
import 'G:/react-1ls/1ls/src/App.css'


export function UsersAPI(props){
    let{match:{params:{id}}} = props;
    let[user,setUser] = useState({})
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}))
    },[id])
    return(
        <div className={'wrap_for_info'}>
            <h1>{user.id} - {user.name}</h1>
            <p>{user.email} - {user.phone}</p>
        </div>
    )
}