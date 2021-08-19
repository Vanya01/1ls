import {useEffect, useState} from "react";
import {getCars} from "./editing";

export default function Positive(){

    let[plus,setPlus] = useState([])
    useEffect(()=>{
        getCars().then(value => setPlus([...value]))

    }, [])
    let filterPlus = plus.filter( (e)=> {
        return e.model.length %2 === 0
    })
    let filterMinus = plus.filter( (e)=> {
        return e.model.length %2 !== 0
    })


    return (
        filterPlus.map(value => <div>{value.model}</div>)
    )
}