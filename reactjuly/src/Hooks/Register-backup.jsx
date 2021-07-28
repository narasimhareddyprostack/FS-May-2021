import React, {useRef} from 'react'
import imageOne from '../assets/one.jpeg'
let Register = ()=>{
   let imgEl = useRef(null);
   let clickHandler = ()=>{
      console.log(imgEl.current)
   }
    return <>
        <div className="container mt-4">
        <div className="row">
        <div className="col-md-6">
           <img src={imageOne} al="DummyTest" width="400px" height="auto" ref={imgEl}/>
           <button className="btn btn-primary" onClick={clickHandler}>Click</button>
        </div>
        </div>
        </div>
    </>
}
export default Register 