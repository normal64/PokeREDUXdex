import {combineReducers} from "redux";
import pokenamesReducer from "./pokenamesReducer";
//combine reducers in order to pass em all
export default combineReducers({
    pokenamesReducer: pokenamesReducer,
})