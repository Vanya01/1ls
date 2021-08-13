
export function User({item,postsOfUser}){

    return (
        <div>
            <h2>{item.name} - {item.id}</h2>
            <button onClick={ () => postsOfUser(item.id)}> About user </button>
        </div>
    )
}