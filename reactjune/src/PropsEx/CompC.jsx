import React, { Component } from "react";
class CompC extends Component {
  render() {
    return (
      <>
        <h4> Component C - Data</h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h5>Employee Age:{this.props.two}</h5>
      </>
    );
  }
}
export default CompC;
//this - ref to current obj
//and if read class member(properties and methods) this keyword inside class
