/*
1. import React 
2. extends R.C
3. render ie return UI 
4. export the comp
*/

import React from "react";
class Counter extends React.Component {
  counterValue = 100;
  
  render() {
    return (
      <>
        <h5> Counter Value:{this.counterValue}</h5>
      </>
    );
  }
}
export default Counter;
