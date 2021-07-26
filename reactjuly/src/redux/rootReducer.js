import {combineReducers } from "redux";

import {messageReducer} from './Message/message.reducer'
import {counterReducer} from './Counter/counter.reducer'
let rootReducer = combineReducers({message:messageReducer, count:counterReducer})
export {rootReducer}

/*
1.redux - createStore, combineReducer
2.react-redux  - useDispatch hooks, useSelector
3.redux-devtool-extendsion
*/