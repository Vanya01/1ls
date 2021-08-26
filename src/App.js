import './App.css';
import {useReducer} from "react";


const reducer = (state,action)=> {

      if (action.obj === '1' && action.act==='+'){
          return (
              {...state,a:state.a + 10}
          )} else if (action.obj === '2' && action.act === '-'){
          return (
              {...state,a:state.a - 2}
          )
          }
}



export default function App() {
    let [state,dispatch] = useReducer(reducer,{a: 0}); // here value of state is a=0 and b=0
     let {a}=state

    return (
    <div className={'main_wrap'}>
        <h3>State - {a} </h3>
        <button  className={'btn1'} onClick={ () => { dispatch( {obj:'1', act:'+'} )}}>Sum</button>
        <button className={'btn2'}  onClick={ () => { dispatch( {obj:'2', act:'-'} )}}>Minus</button>

        <p> Here should be some text... Or smth else... </p>
    </div>
  );
}



// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer