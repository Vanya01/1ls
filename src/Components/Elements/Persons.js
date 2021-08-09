import './Persons.css'
export function Persons({title,picture,info,age}){
    return(
        <div className={'person'}>
            <h2>{title}</h2>
            <h3>{age}</h3>
            <img src={picture} alt="pgr"/>
            <p>{info}</p>
        </div>
    )
}