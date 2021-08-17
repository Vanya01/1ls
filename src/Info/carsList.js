import {DeleteCar} from "./editing";
import {useState} from "react";
import {NewForm} from "./newForm";

export function Carlist({newValue}){
    let [editCar,setEditCar] = useState([])
    return(
        <div className={'wrap_last'}>

            <div className="list"> <div className="wrap_two"><h2>{newValue.id} - {newValue.model}</h2>
                <p>{newValue.price} - {newValue.year}</p>
            </div>
                <div className="wrap">

                    <button id={'edit_btn'} onClick={()=> {

                        (setEditCar(<NewForm newValue={newValue}/>))

                    }}> Edit</button>

                    <button id={'delete_btn'} onClick={() => {
                        DeleteCar(newValue.id)
                    }}> Delete
                    </button>
                </div>
                <div>
                    {editCar}
                </div>
            </div>

        </div>
    )
}
