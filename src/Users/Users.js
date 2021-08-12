import {useEffect, useState} from "react";
import {getUsers} from "../services/user.axios";
import {User} from "../User/User";


export function Users(){
 let [users,setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(({data})=>setUsers([...data]))
    },[])

    return(
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}

