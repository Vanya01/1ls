import {useEffect, useState} from "react";
import {getPost} from "../../../../Services/posts-api";


export function PostAPI(props){
    let{match:{params:{id}}} = props
    let[post,setPost] = useState({})

    useEffect(()=>{
        getPost(id).then(value => setPost({...value}))
    },[id])
     console.log(post)
    return(
        <div>
            <h1>{post.id} - {post.title}</h1>
        </div>
    )

}