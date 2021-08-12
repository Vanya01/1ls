import {Address} from "../Address/Address";
import {Posts} from '../Posts/Posts';
import {useEffect, useState} from "react";
import {getCommentsOfUser, getPostOfUser} from "../services/user.axios";
import {Comments} from "../Comments/Comments";
export function User({item,item:{address}}){

    let [posts,setPosts]=useState([])

    useEffect(()=>{
        getPostOfUser(item.id).then(({data}) => setPosts([...data]))
    },[item.id])

    let [comments,setComments]=useState([])

    useEffect(()=>{
        getCommentsOfUser(item.id).then(({data}) => setComments([...data]))
    },[item.id])



    return (
        <div>
            <h2>{item.name} - {item.id}</h2>
            <p>{item.email} - {item.username}</p>
            <Address address={address}/>
            <br/>
            <Posts posts={posts}/>
            <Comments comments={comments}/>
        </div>
    )
}