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




function DeleteCar(){
   return  fetch('http://192.168.1.253/api/v1/cars', {
        method:'DELETE'
    })
        .then((response) => response.json())
}
export {getCars,Controling,DeleteCar}