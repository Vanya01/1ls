function Controling({all}){
        fetch('http://192.168.1.253/api/v1/cars'
        )
            .then((response) => response.json())
            .then((all_cars) => console.log(all_cars));
}

 function getCars(){
       return fetch('http://192.168.1.253/api/v1/cars')
            .then(listOne => listOne.json())

}


function DeleteCar(id){
   return  fetch(`http://192.168.1.253/api/v1/cars/${id}` , {
        method:'DELETE'
    })
}


const editCar = ({id, model, price, year}) => {
 fetch(`http://195.72.146.25/api/v1/cars/${id}`,{
    method: 'PUT',
        body: JSON.stringify({id, model, price, year}),
        headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
    .then((json) => console.log(json));
}


export {getCars,Controling,DeleteCar,editCar}