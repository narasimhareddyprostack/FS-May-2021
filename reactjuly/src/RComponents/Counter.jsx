import React from 'react'
import {incrAction, decrAction} from '../redux/Counter/counter.action'
import {useDispatch, useSelector} from 'react-redux'
let Counter = ()=>{
    let dispatch = useDispatch()
    let cData = useSelector((state)=>{return state.count})
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    return <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-6">
                <div className="card">
                <div className="card-header"> Qty :{cData.counter} </div>
                <pre>{JSON.stringify(cData)}</pre>
                <div className="card-body">
                <button className="mr-4" onClick={decrHandler}> - </button>
                <button onClick={incrHandler}> + </button>
                </div>
                </div>
                </div>
                </div>
            </div>
            </React.Fragment>


    
}
export default Counter;