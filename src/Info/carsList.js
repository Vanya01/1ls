import {DeleteCar} from "./editing";

export function Carlist({newValue}){
    return(
        <div className={'list'}>
           <h2>{newValue.id} - {newValue.model}</h2>
           <p>{newValue.price} - {newValue.year}</p>
            <div className="wrap">
                <button id={'edit_btn'}> Edit   </button>
                <button id={'delete_btn'} onClick={()=>{
                    <DeleteCar/>
                }}> Delete </button>

            </div>
        </div>
    )
}
