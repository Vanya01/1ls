
import {
    withRouter,

} from "react-router-dom";
import 'G:/react-1ls/1ls/src/App.css'

 function Post({item,history}){

    const navigateToPost = ()=>{
        history.push(`/posts/${item.id}`)
    }

    return(
        <div className={'wrap_for_posts'}>
                <p>Post number - {item.id}</p>
                <button onClick={navigateToPost}>Post info</button>
        </div>
    )
}

export default withRouter(Post)