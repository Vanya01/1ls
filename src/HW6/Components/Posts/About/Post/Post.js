
import {
    withRouter,

} from "react-router-dom";


 function Post({item,history}){

    const navigateToPost = ()=>{
        history.push(`/posts/${item.id}`)
    }

    return(
        <div>
            Post number - {item.id}
                <button onClick={navigateToPost}>Post info</button>
        </div>
    )
}

export default withRouter(Post)