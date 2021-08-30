import {rootReducer} from "./rootReducers";
import {someReducer} from "./smthReducer";
import {combineReducers} from "redux";

const reducer = combineReducers({someReducer,rootReducer})
export {reducer}