
export function Components({item}){
    return(
        <div>
            <h2>{item.id} - {item.name}</h2>
            <p>{item.body}</p>
        </div>
    )
}