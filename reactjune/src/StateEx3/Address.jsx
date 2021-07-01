import React, { Component } from "react";
class Address extends Component {
  state = {
    house_No: 101,
  };
  changeAddress = () => {
    this.setState({ house_No: 110 });
  };
  render() {
    return (
      <>
        <h2> Address Component</h2>
        <h4> House Number: {this.state.house_No}</h4>
        <button onClick={this.changeAddress}>Change Address</button>
      </>
    );
  }
}
export default Address;
