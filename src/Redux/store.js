import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";

let store = createStore(combineReducers({
  totalHarga: counterReducer
}))

export default store