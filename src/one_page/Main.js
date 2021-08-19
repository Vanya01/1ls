import {useEffect, useState} from "react";
import {getCars} from "./editing";

export function Cars({param}){
    const {url}=param.match
    let[cars,setCars] = useState([])

    useEffect(()=>{
        getCars().then(value => {setCars([...value])})
    },[])

    switch (url){
        case '/home':
            return cars.map(value => <div> {value.model}</div>)
        case '/plus':
            return cars.filter(value => (value.model.length)%2 === 0).map(value => <div>{value.model}</div>)
        case '/minus':
            return cars.filter(value => (value.model.length)%2 !== 0).map(value => <div>{value.model}</div>)
        default:
            return <h1>Nice</h1>
    }

}