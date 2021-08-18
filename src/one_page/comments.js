import {getComments} from "./Main";
import {useEffect, useState} from "react";

export  default function Comments(){

    let [comments,setComments]=useState([])
    useEffect(()=> {
        getComments().then(value => setComments([...value]))
    })
    return(
        <div>
        <h3>Comments</h3>
            {
                comments.map(value => <div key={value.id}>{value.body}</div>)
            }
        </div>
    )
}