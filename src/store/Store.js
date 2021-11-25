import { createStore } from "redux";
import noteReducers from "../reducers/noteReducers";

// import UserReducer from './reducers/UserReducer' 
// import userReducer from "../reducers/UserReducer";


const Store = createStore(noteReducers)

export default Store;