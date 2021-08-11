import {useEffect,useState} from "react";
import {Components} from "../Components/Components";
import {getPosts} from "../Posts/Posts";

export function Post(){

    let [post,setPosts] = useState([])
    useEffect(()=>{

        getPosts().then( value => setPosts([...value]))
    },[])

    return(
        <div>
            {
                post.map(value => <Components item={value} key={value.id}/>)
            }
        </div>
    )
}