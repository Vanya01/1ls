const saveNewCar = ({year,model,price,id}) => {

    fetch('http://192.168.1.253/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({
    id,model,price,year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export{saveNewCar}