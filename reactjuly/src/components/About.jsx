import React from "react";
import {useSelector} from 'react-redux'
function About() {
  let data = useSelector((state)=>{
    return state.product
  })
  return (
    <div>
      <h1>About US</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default About;


//How to read and update redux store.
/*
1. import useSelector hook
*/

//Redux - keeing component data as globally.
//All React comp - are reading and update. 