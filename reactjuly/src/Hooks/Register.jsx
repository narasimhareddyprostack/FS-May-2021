import React, {useState,useRef} from 'react'

let Register = ()=>{
   /*  let [terms,setTerms] = useState(false) */
   let buttonEl = useRef(null);
   let clickHandler = (event)=>{
      /*  setTerms(event.target.checked) */

       console.log(buttonEl.current)
       
       buttonEl.current.disabled = !event.target.checked
      
   }
    return <>
        <div className="container mt-4">
        <div className="row">
        <div className="col-md-6">
          <div className="card">
          <div className="card-header">
             {/*  {JSON.stringify(terms)} */}
          </div>
              <div className="card-body">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" onClick={clickHandler}/>
                    <label className="custom-control-label" for="customCheck1">Terms and Conditions</label>
                </div>
                <div className="form-group">
                    <button className="btn btn-success btn-sm" disabled ref={buttonEl} >Submit</button>
                </div>
              </div>
          </div>
        </div>
        </div>
        </div>
    </>
}
export default Register 