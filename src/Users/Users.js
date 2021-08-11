import {useEffect,useState} from "react";
import {Components} from "../Components/Components";
import {getUsers} from "../User/User.service";

export function Users(){
   let [users,setUsers] = useState([])
    useEffect(()=>{
      getUsers().then( value => setUsers([...value]))
    },[])

    return(

        <div>
            {
                users.map(value => <Components item={value} key={value.id}/>)
            }
        </div>
    );
}
