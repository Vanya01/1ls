import {Address} from "../Address/Address";
import {Posts} from '../Posts/Posts';
import {useEffect, useState} from "react";
import {getPostOfUser} from "../services/user.axios";

export function User({item,item:{address}}){

    let [posts,setPosts]=useState([])

    useEffect(()=>{
        getPostOfUser(item.id).then(({data}) => setPosts([...data]))
    },[item.id])




    return (
        <div>
            <h2>{item.name} - {item.id}</h2>
            <p>{item.email} - {item.username}</p>
            <Address address={address}/>
            <br/>
            <Posts posts={posts}/>

        </div>
    )
}