import {useEffect, useState} from "react";
import {getPosts} from "../../../../Services/posts-api";
import Post from "../Post/Post";
import {Route} from "react-router-dom";
import {PostAPI} from "./post-details-api";
import 'G:/react-1ls/1ls/src/App.css'


export default function Posts(props){
    let {match:{url},history} = props
       let [posts,setPosts] = useState([])

    useEffect(()=>{
        const y = async ()=>{
            let response = await getPosts()
            setPosts([...response])
        }
            y()
    },[])

    return(
        <div className={'main_post_wrap'}>
        <Route path={`${url}/:id`} render={(props) => <PostAPI{...props}/>}/>
            <div className={'more_wrap'}>
        {
            posts.map(value=> <Post history={history} item={value} key={value.id} />)
        }
            </div>
        </div>
    )
}
