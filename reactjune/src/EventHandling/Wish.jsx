import React from "react";
class Wish extends React.Component {
  state = { msg: "Hello" };

  gmHandler = () => {
    console.log("Test Case 123");
    this.setState({ msg: "Good Morning" });
  };
  gnHanlder() {
    this.setState({ msg: "Good Night" });
  }
  render() {
    return (
      <>
        <h2>Welcome message : {this.state.msg}</h2>
        <button onClick={this.gmHandler}>GM</button>
        <button
          onClick={() => {
            this.gnHanlder();
          }}
        >
          GN
        </button>
      </>
    );
  }
}
export default Wish;
