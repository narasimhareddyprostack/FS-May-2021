import {INCR, DECR} from './product.action'
let initialState = {
    name:"Mi 4A PRO 80 cm (32 inch) HD Ready LED Smart Android ",
    price:15999,
    image:'https://rukminim1.flixcart.com/image/224/224/kq6yefk0/television/n/w/v/l32m5-al-mi-original-imag4967mvqvpvgp.jpeg?q=90',
    qty:1
}
let productReducer = (state=initialState, action)=>{

    console.log(action, "Test")
    switch(action.type){
        case INCR:
            return {...state, qty:state.qty + 1}
        case DECR:
            return {...state, qty:state.qty -1}
        default:
            return state

    }
}
export {productReducer}

/*
what is reducer? reducer is pure function?
it is taking two parameter 1. state, 2. action.

Pure function - we cnt write -any side effect and incr (++) and decr operator(--)
--


*/