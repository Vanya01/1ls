import {Geo} from "../Geo/Geo";

export function Address({address: {street,city,geo}}){
    return(
        <div>
            <i>
            {city} - {street}
            </i>
            <Geo geo={geo}/>
        </div>
    )
}