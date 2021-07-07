import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", mobile: "" };
  }
  emailHanlder = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHanlder = (event) => {
    this.setState({ password: event.target.value });
  };
  mobileHanlder = (event) => {
    this.setState({ mobile: event.target.value });
  };
  regHandler = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Registration </h1> <hr />
        <form onSubmit={this.regHandler}>
          <input type="text" placeholder="email" onChange={this.emailHanlder} />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.passwordHanlder}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Mobile"
            onChange={this.mobileHanlder}
          />{" "}
          <br />
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default Registration;
