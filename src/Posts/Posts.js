import {Post} from '../Post/Post'

export function Posts({posts}){
    return(
        <div>
            {
                posts.map(value => <Post item={value}/>)
            }
        </div>
    )
}