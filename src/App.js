import './App.css';
import {useReducer} from "react";


const reducer = (state ,action)=> {

      if (action.obj === '1' && action.act==='+'){
          return (
              {...state,a:state.a + 10}
          )} else if (action.obj === '2' && action.act === '-'){
          return (
              {...state,a:state.a - 2}
          )}  else if (action.obj === '3' && action.act === '+'){
          return (
              {...state,b:state.b + 30}
          )}  else if (action.obj === '4' && action.act === '-'){
          return (
              {...state,b:state.b - 10}
          )}  else if (action.obj === '5' && action.act === '+'){
          return (
              {...state,c:state.c + 20}
          )}  else if (action.obj === '6' && action.act === '-'){
          return (
              {...state,c:state.c - 5}
          )}

}



export default function App() {
    let [state,dispatch] = useReducer(reducer,{a: 0,b:0,c:0}); // here value of state is a=0 and b=0
     let {a,b,c}=state

    return (
    <div className={'app'}>
        <div className={'main_wrap'}>

        <h3>State - {a} </h3>
        <button  className={'btn1'} onClick={ () => { dispatch( {obj:'1', act:'+'} )}}>Sum</button>
        <button className={'btn2'}  onClick={ () => { dispatch( {obj:'2', act:'-'} )}}>Minus</button>
            <p> Here should be some text... Or smth else... </p>
        </div>

        <div className={'main_wrap'}>
            <h3>State - {b} </h3>
            <button  className={'btn1'} onClick={ () => { dispatch( {obj:'3', act:'+'} )}}>Sum</button>
            <button className={'btn2'}  onClick={ () => { dispatch( {obj:'4', act:'-'} )}}>Minus</button>
            <p> Here should be some text... Or smth else... </p>

        </div>

        <div className={'main_wrap'}>
               <h3>State - {c} </h3>
            <button  className={'btn1'} onClick={ () => { dispatch( {obj:'5', act:'+'} )}}>Sum</button>
            <button className={'btn2'}  onClick={ () => { dispatch( {obj:'6', act:'-'} )}}>Minus</button>
               <p> Here should be some text... Or smth else... </p>
        </div>
    </div>
  );
}


//
// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer
