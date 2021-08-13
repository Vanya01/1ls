import {getCommentsOfUser} from "../services/user.axios";
// import {Comments} from "../Comments/Comments";
import {useEffect, useState} from "react";



export function Post({item}){
    // let [comments,setComments]=useState([])

    useEffect(()=>{
        // getCommentsOfUser(item.id).then(({data}) => setComments([...data]))
    },[item.id])


    return(
        <div>
            {item.title}
            {/*<Comments comments={comments}/>*/}
        </div>
    )


}

// title of posts