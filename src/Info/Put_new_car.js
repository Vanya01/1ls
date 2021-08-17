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






// сверху страницы у вас должна быть форма для записи/редактирования машин
// под формой должны выводится машинки

// у каждой машинки должно быть 2 кнопки delete и edit:
//     - по нажатии на кнопку delete машина должна удалятся с базы данных и со списка выведенных машин
// - по нажатии на кнопку edit, форма должна заполнится данными выбранной машины с последующим обновлением и сохранением в базу данных
//
// документация и API обновлена и находится по одной их ссылок:
//     http://195.72.146.25/
//         http://192.168.1.253/

// GET request using fetch()
