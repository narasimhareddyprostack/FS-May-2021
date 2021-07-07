import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
  }
  userNameHandler = (event) => {
    /*  console.log(event);
    console.log(event.target); */
    /* console.log(event.target.value); */
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  };
  loginHanlder = (event) => {
    //login business login
    event.preventDefault();
    alert(JSON.stringify(this.state));

    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <h1> Login Form</h1>
        <form onSubmit={this.loginHanlder}>
          <label>User Name</label>
          <input type="text" name="userName" onChange={this.userNameHandler} />
          <br />
          <label>Password </label>
          <input
            type="text"
            name="password"
            onChange={this.passwordHandler}
          />{" "}
          <br />
          <input type="submit" value="Login" />
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
