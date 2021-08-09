import './Persons.css'
export function Users({user,i}){

    return(
        <div className={'user'}>
            <h2>{user[i].id} {user[i].name} {user[i].username}</h2>
            <div>
                <p>{user[i].address.street}</p>
                <p>{user[i].address.suite}</p>
                <p>{user[i].address.city}</p>
                <p>{user[i].address.zipcode}</p>
                <p>{user[i].address.geo.lat}</p>
            </div>
        </div>
    )
}