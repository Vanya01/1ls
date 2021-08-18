import {useEffect, useState} from "react";
import {getPosts} from "./Main";

export  default function Posts(){
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    })
    return(
        <div>
        <h3>Posts</h3>{
            posts.map(value => <div key={value.id}>{value.title}</div>)
        }
        </div>
    )
}