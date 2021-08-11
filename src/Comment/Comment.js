import {useEffect,useState} from "react";
import {Components} from "../Components/Components";
import {getComments} from "../Comments/Comments";
export function Comment(){
    let [comment,setComment] = useState([])
    useEffect(()=>{
        getComments().then( value => setComment([...value]))
    },[])
    return(
        <div>
            {
                comment.map(value => <Components item={value} key={value.id} />)
            }
        </div>
    )
}