import {useEffect, useState} from "react";
import {getPost} from "../../../../Services/posts-api";
import 'G:/react-1ls/1ls/src/App.css'


export function PostAPI(props){
    let{match:{params:{id}}} = props
    let[post,setPost] = useState({})

    useEffect(()=>{
        getPost(id).then(value => setPost({...value}))
    },[id])
    return(
        <div className={'posts_info'}>
            <h1>ID: {post.id}</h1>
            <br/>
            <p>Post title: {post.title}</p>
        </div>
    )

}