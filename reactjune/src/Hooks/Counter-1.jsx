import React from "react";
class Counter extends R.C {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  updateHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return <></>;
  }
}
export default Counter;

//constructor - 
// render()

//updateHanlder 