import {useEffect, useState} from "react";
import {getUsers} from "./Main";

export  default function Users(){
let [users,setUsers] = useState([])
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))

    })
    return(
        <div>
        <h3>Users</h3>
            {
                users.map(value => <div  key={value.id}> {value.name} </div>)
            }
        </div>

    )
}