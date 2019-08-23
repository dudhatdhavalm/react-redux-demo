import { createStore, applyMiddleware } from "redux";
import reducers from "../Reducers/Index";
import thunk from "redux-thunk";

const middleWares = applyMiddleware(thunk);

const store = createStore(reducers, middleWares);

export default store;
