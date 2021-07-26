import {createStore} from 'redux'
import {rootReducer} from './rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools());   

export {store}


/*
what is redux store?
colleciton states


{
    message:{message:"Hello"},
    counter:{},
    auth:{},
    order:{}
}

*/