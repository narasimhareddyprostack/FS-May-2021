import {combineReducers } from "redux";

import {messageReducer} from './Message/message.reducer'
import {counterReducer} from './Counter/counter.reducer'
import {productReducer} from './Product/product.reducer'
let rootReducer = combineReducers({message:messageReducer, count:counterReducer, product:productReducer})
export {rootReducer}

/*
1.redux - createStore, combineReducer
2.react-redux  - useDispatch hooks, useSelector
3.redux-devtool-extendsion
*/

/*
How to combine reducer ?

combineReducers!


*/