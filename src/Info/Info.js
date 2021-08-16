import {useState} from "react";
import {saveNewCar} from "./Put_new_car";

export function Control(){
    let [year,setYear] = useState('Year');
    let [model,setModel] = useState('Model')
    let [id,setId] = useState('Id')
    let [price,setPrice] = useState('Price')
    let [car,setCar] = useState({model:'', price:'',id:'',year:''})
    let empty = {}

   const onSubmitForm = (e) => {
        e.preventDefault()
        let tempCar = {id,price,model,year}
        saveNewCar(tempCar)
        setCar({...tempCar})
       }


    const changeModel = (e) => {
           let model = e.target.value
           setModel(e.target.value)
        empty.model = model

    }
    const changePrice = (e) => {
        let price = e.target.value
        setPrice(e.target.value)
        empty.price = price
    }
    const changeId = (e)=> {
        let id = e.target.value
        setId(e.target.value)
        empty.id = id
    }
    const changeYear = (e)=> {
        let year = e.target.value
        setYear(e.target.value)
        empty.year = year
    }

    return (
        <div>
            <form onSubmit={onSubmitForm} >

                <input type="text" name={'Model'} value={model} maxlength={20} onInput={changeModel}/>

                <input type="text" name={'Price'} value={price} min={0}  onInput={changePrice}/>

                <input type="text" id={'Id'} value={id}  onInput={changeId}/>

                <input type="text" name={'Year'} value={year} min={1990} max={2021}   onInput={changeYear}/>

                <input type="submit" value={'Add new car'}/>

            </form>
            <div>{JSON.stringify(car)}</div>
        </div>
    )
}
