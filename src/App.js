import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUsers} from "./services/user_api";
import {fetch_Users, FETCH_USERS, PUSH_USER, pushUser} from "./redux/actions";

export default function App() {
        let state = useSelector( state =>{
        let {rootReducer} = state
        return rootReducer
    })

    let dispatch = useDispatch();
    let {users} = state;

  useEffect(()=>{
        fetchUsers().then(value => {
        dispatch(fetch_Users(value))
  })
  },[])

    let onSubmit = (e)=> {
        e.preventDefault()
        let name = e.target.name.value
        let user = {name}
        addUser(user).then(value => {
            dispatch(pushUser(value))
        })
    }


   return (
       <div className={'mainDiv'}>

           <form onSubmit={onSubmit}>
               <input type="text" name={'name'} className={'form'}/>
               <button className={'btn_add'}>Add new user</button>
           </form>
           <hr/>

           {
               users.map((value) => <div  className={'usersDiv'} key={value.id}>{value.name}</div>)
           }
       </div>
  )
}



