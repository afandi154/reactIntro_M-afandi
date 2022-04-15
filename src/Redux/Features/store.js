import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";

let rootReducers = combineReducers({
  counter: counterReducer
})

let store = createStore(rootReducers)

export default store