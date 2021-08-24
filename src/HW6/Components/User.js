import {
    withRouter,

} from "react-router-dom";

import 'G:/react-1ls/1ls/src/App.css'


function User({item,history}){
    const navigateToUser =()=>{
        history.push(`/users/${item.id}`)
    }
    return(
        <div className={'Wrap_users'}>
            <p>{item.name} -</p>
                <button className={'usersBTN'} onClick={navigateToUser}>User info</button>
        </div>
    )
}
export default withRouter(User)