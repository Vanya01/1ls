import {useEffect, useState} from "react";
import {getUsers} from "../Services/user-api";
import User from "./User";
import {Route} from "react-router-dom";
import {UsersAPI} from "./User-details-api";

export function Users(props) {
    let {match: {url}, history} = props
    let [users, setUsers] = useState([])

    useEffect(() => {
        const x = async () => {
            let response = await getUsers();
            setUsers([...response]);
        }
        x()
    }, [])

    return (
        <div>

            {
                users.map(value => <User history={history} item={value} key={value.id}/>)
            }

            <Route path={`${url}/:id`} render={(props) => <UsersAPI{...props}/>}/>
        </div>
    )
}
