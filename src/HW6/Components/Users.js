import {useEffect, useState} from "react";
import {getUsers} from "../Services/user-api";
import User from "./User";
import {Route} from "react-router-dom";
import {UsersAPI} from "./User-details-api";
import 'G:/react-1ls/1ls/src/App.css'



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
        <div className={'main_user_wrap'}>

            <Route path={`${url}/:id`} render={(props) => <UsersAPI{...props}/>}/>

            <div className={'wrap_users'}>
            {
                users.map(value => <User history={history} item={value} key={value.id}/>)
            }
            </div>
        </div>
    )
}
