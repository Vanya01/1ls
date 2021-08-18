import {useState} from "react";
import {editCar} from "./editing";


export function NewForm({newValue}){
    let [year,setYear] = useState('Year');
    let [model,setModel] = useState('Model')
    let [price,setPrice] = useState('Price')
    let [car,setCar] = useState({model:'', price:'',id:'',year:''})

    const onSubmitForm = (e) => {
        let id = newValue.id
        let tempAuto = {id, model, price, year }
        editCar(tempAuto)
        e.preventDefault()
        setCar({...tempAuto})
    }

     console.log(car)

    const changeModel = (e) => {
        let model = e.target.value
        setModel(e.target.value)
    }
    const changePrice = (e) => {
        let price = e.target.value
        setPrice(e.target.value)
    }
    const changeYear = (e)=> {
        let year = e.target.value
        setYear(e.target.value)

    }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
                {/*or in the placeholder could be newValue.model */}
                <input type="text" name={'Model'} placeholder={'Change model'} maxLength={20} onInput={changeModel}/>

                <input type="text" name={'Price'} placeholder={'Change year'}   onInput={changePrice}/>

                <input type="text" name={'Year'} placeholder={'Change year'} min={1990} max={2021}   onInput={changeYear}/>

                <input type="submit" value={'Edit this car'}/>

            </form>

            <div>
                <h3>Add your car</h3>
            </div>

        </div>
    )
}
