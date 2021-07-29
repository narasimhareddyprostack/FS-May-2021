import React, {useReducer} from 'react'
let intialState = {
  message:"Hello"
}
let reducer = (state,action)=>{
  switch(action.type){
    case 'gm':
      return { message:"Good Morning"}
    case 'ga':
        return { message:"Good Afternoon"}
    case 'gn':
      return { message:"Good Night"}
    default:
      return state
  }

  // reducer function duty is state managment only
}
let MessageCard = ()=>{
let [state, dispatch] = useReducer(reducer, intialState);
  return <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
         Message:   {state.message}
            </div>

            <div className="card-body">
              <button className="btn btn-success mr-2" onClick={()=>{dispatch({type:'gm'})}}>GM</button>
              <button className="btn btn-secondary mr-2" onClick={()=>{dispatch({type:'ga'})}}>GA</button>
              <button className="btn btn-secondary" onClick={()=>{dispatch({type:'gn'})}}>GN</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default MessageCard