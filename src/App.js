import './App.css';
import {useReducer} from "react";



const reducer = (state={a:0,b:1},action)=> {

}
function App() {
    let [state,dispatch] = useReducer(reducer)

    return (
    <div className={'main_wrap'}>
        <h3>State - {state1}</h3>
       <button >Inc</button>
        <h4>State - {state2}</h4>
        <button >Dec</button>
    </div>
  );
}

export default App;


// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer