import React, {useState} from 'react'
let MessageCard = ()=>{
let [message, setMessage] = useState("Hello")

    return <>
 <div className="container mt-4">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
            {message}
        </div>
        <div className="card-body">
          <button className="btn btn-success mr-2" onClick={()=>{setMessage("Good Morning")}}>GM</button>
          <button className="btn btn-secondary" onClick={()=>{setMessage("Good Night")}}>GN</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
}
export default MessageCard