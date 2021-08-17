const saveNewCar = ({year,model,price,id}) => {

    fetch('http://192.168.1.253/api/v1/cars', {
        method:'POST',
        body: JSON.stringify({
          model,id,price,year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((all_cars) => console.log(all_cars));
}
export{saveNewCar}



// const carsList = () => {
//     fetch('http://192.168.1.253/api/v1/cars')
//
//         // Converting received data to JSON
//         .then(response => response.json())
//         .then(json => {
//
//             // Create a variable to store HTML
//             let li = `<tr><th>Name</th><th>Email</th></tr>`;
//
//             // Loop through each data and add a table row
//             json.forEach(cars => {
//                 li += `<tr>
// 				<td>${cars.id} </td>
// 				<td>${cars.model}</td>
// 				<td>${cars.price}</td>
// 				<td>${cars.year}</td>
//
// 			</tr>`;
//             });
//       console.log(li)
//             // Display result
//             // document.getElementById("cars").innerHTML = li;
//         });
//
// }
