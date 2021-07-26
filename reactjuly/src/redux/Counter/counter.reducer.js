import {INCR, DECR} from './counter.action'
let initalState = {
    counter:0
}
let counterReducer = (state = initalState, action)=>{
    switch(action.type){
        case INCR:
            return {
               counter:state.counter +1
            }
            case DECR:
                return {
                    counter:state.counter -1
                }
        default:
            return state;
    }
}
export {counterReducer}