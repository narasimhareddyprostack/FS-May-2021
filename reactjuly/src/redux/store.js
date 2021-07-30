import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
let middleware = [logger, thunk]
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export { store }


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

/*
How to debug - redux Application/store?
using composeWithDevTools - redux-devtools-extension Package
*/